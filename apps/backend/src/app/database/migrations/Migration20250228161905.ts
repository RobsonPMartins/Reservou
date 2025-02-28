import { Migration } from '@mikro-orm/migrations';

export class Migration20250228161905 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table "reserva" ("id" serial primary key, "estado" varchar(255) not null, "cidade" varchar(255) not null, "checkin" varchar(255) not null, "checkout" varchar(255) not null, "hospedes" jsonb not null, "imagem" varchar(255) not null);`);
  }

  override async down(): Promise<void> {
    this.addSql(`drop table if exists "reserva" cascade;`);
  }

}
