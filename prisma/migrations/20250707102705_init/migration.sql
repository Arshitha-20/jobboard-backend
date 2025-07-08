-- CreateTable
CREATE TABLE "jobs" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "location" TEXT,
    "job_type" TEXT,
    "salary_min" INTEGER,
    "salary_max" INTEGER,
    "deadline" TIMESTAMP(3),
    "description" TEXT,

    CONSTRAINT "jobs_pkey" PRIMARY KEY ("id")
);
