import { Injectable, UnauthorizedException } from "@nestjs/common";
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { config } from 'dotenv';

config();

@Injectable()
export class AuthService {

    private adminEmail = 'admin@reservou.com.br';
    private senhaHash = '';
    private secretKey = process.env.JWT_SECRET || 'chave_padrão_segura';

    constructor() {
        this.gerarSenhaCriptografada();
    }

    private async gerarSenhaCriptografada() {
        if (!this.senhaHash) {
            this.senhaHash = await bcrypt.hash('reservou12345*', 10);
        }
    }

    async validateUser(email: string, senha: string) {
        if (email !== this.adminEmail) {
            throw new UnauthorizedException('Credenciais inválidas!');
        }

        const senhaValida = await bcrypt.compare(senha, this.senhaHash);
        if (!senhaValida) {
            throw new UnauthorizedException('Credenciais inválidas!');
        }

        const token = jwt.sign({ email }, this.secretKey, { expiresIn: '1h' });

        return { token };
    }
}
