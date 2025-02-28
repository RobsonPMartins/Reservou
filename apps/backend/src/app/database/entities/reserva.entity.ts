import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class Reserva {
  @PrimaryKey()
  id!: number;

  @Property()
  estado!: string;

  @Property()
  cidade!: string;

  @Property()
  checkin!: string;

  @Property()
  checkout!: string;

  @Property({ type: 'jsonb' })
  hospedes!: { Adultos: number; Criancas: number; Bebes: number; Pets: number };

  @Property()
  imagem!: string;
}
