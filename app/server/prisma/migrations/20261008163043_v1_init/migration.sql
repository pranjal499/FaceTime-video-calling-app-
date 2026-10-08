-- CreateEnum
CREATE TYPE "MeetStatus" AS ENUM ('SCHEDULED', 'LIVE', 'ENDED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "ParticipantRole" AS ENUM ('HOST', 'PARTICIPANT');

-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL,
    "username" TEXT NOT NULL,
    "display_name" TEXT NOT NULL,
    "avatar_url" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "meets" (
    "id" UUID NOT NULL,
    "host_id" UUID NOT NULL,
    "title" TEXT,
    "scheduled_at" TIMESTAMP(3),
    "status" "MeetStatus" NOT NULL DEFAULT 'SCHEDULED',
    "started_at" TIMESTAMP(3),
    "ended_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "meets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "meet_participants" (
    "id" UUID NOT NULL,
    "meet_id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "role" "ParticipantRole" NOT NULL DEFAULT 'PARTICIPANT',
    "joined_at" TIMESTAMP(3),
    "left_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "meet_participants_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE INDEX "meets_host_id_idx" ON "meets"("host_id");

-- CreateIndex
CREATE INDEX "meets_scheduled_at_idx" ON "meets"("scheduled_at");

-- CreateIndex
CREATE INDEX "meets_status_idx" ON "meets"("status");

-- CreateIndex
CREATE INDEX "meet_participants_user_id_idx" ON "meet_participants"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "meet_participants_meet_id_user_id_key" ON "meet_participants"("meet_id", "user_id");

-- AddForeignKey
ALTER TABLE "meets" ADD CONSTRAINT "meets_host_id_fkey" FOREIGN KEY ("host_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "meet_participants" ADD CONSTRAINT "meet_participants_meet_id_fkey" FOREIGN KEY ("meet_id") REFERENCES "meets"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "meet_participants" ADD CONSTRAINT "meet_participants_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
