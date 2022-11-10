import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';

import { Livro } from './livro.model';
import { LivrosService } from './livros.service';

@Controller('livros')
export class LivrosController {
  constructor(private livrosService: LivrosService) {}

  @Get()
  obterTodos(): Livro[] {
    return this.livrosService.obterTodos();
  }

  //Para ter acesso ao id do produto, é necessário passar o id como parâmetro
  //Get é o método HTTP que será utilizado para acessar um ou todos os produtos
  @Get(':id')
  obterUm(@Param() params): Livro {
    return this.livrosService.obterUm(params.id);
  }

  //Para ter acesso ao corpo da requisição, é necessário importar o Body do @nestjs/common
  //passar o produto como parâmetro
  //Post é o método utilizado para criar um novo produto
  @Post()
  criar(@Body() livro: Livro) {
    livro.id = 100;
    this.livrosService.criar(livro);
  }

  //Metodo para alterar um produto
  //Put é o método utilizado para alterar um produto
  @Put()
  alterar(@Body() livro: Livro): Livro {
    return this.livrosService.alterar(livro);
  }

  //Metodo para apagar um produto
  //Delete é o método utilizado para apagar um produto
  @Delete(':id')
  apagar(@Param() params) {
    this.livrosService.apagar(params.id);
  }
}
