import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-prilozhenie-клиенты-l');
  this.route('i-i-s-prilozhenie-клиенты-e',
  { path: 'i-i-s-prilozhenie-клиенты-e/:id' });
  this.route('i-i-s-prilozhenie-клиенты-e.new',
  { path: 'i-i-s-prilozhenie-клиенты-e/new' });
  this.route('i-i-s-prilozhenie-материалы-l');
  this.route('i-i-s-prilozhenie-материалы-e',
  { path: 'i-i-s-prilozhenie-материалы-e/:id' });
  this.route('i-i-s-prilozhenie-материалы-e.new',
  { path: 'i-i-s-prilozhenie-материалы-e/new' });
  this.route('i-i-s-prilozhenie-поставщики-l');
  this.route('i-i-s-prilozhenie-поставщики-e',
  { path: 'i-i-s-prilozhenie-поставщики-e/:id' });
  this.route('i-i-s-prilozhenie-поставщики-e.new',
  { path: 'i-i-s-prilozhenie-поставщики-e/new' });
  this.route('i-i-s-prilozhenie-приход-денег-l');
  this.route('i-i-s-prilozhenie-приход-денег-e',
  { path: 'i-i-s-prilozhenie-приход-денег-e/:id' });
  this.route('i-i-s-prilozhenie-приход-денег-e.new',
  { path: 'i-i-s-prilozhenie-приход-денег-e/new' });
  this.route('i-i-s-prilozhenie-расход-денег-l');
  this.route('i-i-s-prilozhenie-расход-денег-e',
  { path: 'i-i-s-prilozhenie-расход-денег-e/:id' });
  this.route('i-i-s-prilozhenie-расход-денег-e.new',
  { path: 'i-i-s-prilozhenie-расход-денег-e/new' });
  this.route('i-i-s-prilozhenie-регистр-оборот-l');
  this.route('i-i-s-prilozhenie-регистр-оборот-e',
  { path: 'i-i-s-prilozhenie-регистр-оборот-e/:id' });
  this.route('i-i-s-prilozhenie-регистр-оборот-e.new',
  { path: 'i-i-s-prilozhenie-регистр-оборот-e/new' });
  this.route('i-i-s-prilozhenie-товары-l');
  this.route('i-i-s-prilozhenie-товары-e',
  { path: 'i-i-s-prilozhenie-товары-e/:id' });
  this.route('i-i-s-prilozhenie-товары-e.new',
  { path: 'i-i-s-prilozhenie-товары-e/new' });
  this.route('i-i-s-prilozhenie-услуги-l');
  this.route('i-i-s-prilozhenie-услуги-e',
  { path: 'i-i-s-prilozhenie-услуги-e/:id' });
  this.route('i-i-s-prilozhenie-услуги-e.new',
  { path: 'i-i-s-prilozhenie-услуги-e/new' });
  this.route('i-i-s-prilozhenie-финансисты-l');
  this.route('i-i-s-prilozhenie-финансисты-e',
  { path: 'i-i-s-prilozhenie-финансисты-e/:id' });
  this.route('i-i-s-prilozhenie-финансисты-e.new',
  { path: 'i-i-s-prilozhenie-финансисты-e/new' });
});

export default Router;
