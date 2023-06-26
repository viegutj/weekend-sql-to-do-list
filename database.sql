CREATE TABLE "weekend-to-do-app-table" (
"id" SERIAL PRIMARY KEY,
"task" VARCHAR (250) NOT NULL,
"isCompleted" BOOLEAN DEFAULT FALSE
);

INSERT INTO "weekend-to-do-app-table" 
("task")
VALUES
('buy groceries'),
('eat veggies');

ALTER TABLE "weekend-to-do-app-table"
ADD "date" DATE DEFAULT current_date;