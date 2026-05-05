-- Enable UUID helper
create extension if not exists pgcrypto;

create table if not exists public.self_assessment_responses (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  session_id text not null,
  module_slug text not null,
  assessment_type text not null,
  payload jsonb not null,
  score numeric
);

create table if not exists public.digital_identity_assessments (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  session_id text not null,
  total_score integer not null check (total_score >= 0 and total_score <= 100),
  section_scores jsonb not null,
  answers jsonb not null
);

create table if not exists public.user_progress_tracking (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  session_id text not null,
  track text not null check (track in ('rbd', 'tech')),
  module_slug text not null,
  completion_pct integer not null default 0 check (completion_pct >= 0 and completion_pct <= 100),
  last_step text,
  unique (session_id, track, module_slug)
);

create or replace function public.update_timestamp()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists trg_user_progress_updated_at on public.user_progress_tracking;
create trigger trg_user_progress_updated_at
before update on public.user_progress_tracking
for each row
execute function public.update_timestamp();

alter table public.self_assessment_responses enable row level security;
alter table public.digital_identity_assessments enable row level security;
alter table public.user_progress_tracking enable row level security;

create policy if not exists "anon_insert_self_assessment"
  on public.self_assessment_responses
  for insert
  to anon
  with check (true);

create policy if not exists "anon_insert_digital_identity"
  on public.digital_identity_assessments
  for insert
  to anon
  with check (true);

create policy if not exists "anon_upsert_progress"
  on public.user_progress_tracking
  for all
  to anon
  using (true)
  with check (true);
