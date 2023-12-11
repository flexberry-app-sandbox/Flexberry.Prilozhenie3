import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISPrilozhenieКлиентыLForm from './forms/i-i-s-prilozhenie-клиенты-l';
import IISPrilozhenieМатериалыLForm from './forms/i-i-s-prilozhenie-материалы-l';
import IISPrilozhenieПоставщикиLForm from './forms/i-i-s-prilozhenie-поставщики-l';
import IISPrilozhenieПриходДенегLForm from './forms/i-i-s-prilozhenie-приход-денег-l';
import IISPrilozhenieРасходДенегLForm from './forms/i-i-s-prilozhenie-расход-денег-l';
import IISPrilozhenieРегистрОборотLForm from './forms/i-i-s-prilozhenie-регистр-оборот-l';
import IISPrilozhenieТоварыLForm from './forms/i-i-s-prilozhenie-товары-l';
import IISPrilozhenieУслугиLForm from './forms/i-i-s-prilozhenie-услуги-l';
import IISPrilozhenieФинансистыLForm from './forms/i-i-s-prilozhenie-финансисты-l';
import IISPrilozhenieКлиентыEForm from './forms/i-i-s-prilozhenie-клиенты-e';
import IISPrilozhenieМатериалыEForm from './forms/i-i-s-prilozhenie-материалы-e';
import IISPrilozhenieПоставщикиEForm from './forms/i-i-s-prilozhenie-поставщики-e';
import IISPrilozhenieПриходДенегEForm from './forms/i-i-s-prilozhenie-приход-денег-e';
import IISPrilozhenieРасходДенегEForm from './forms/i-i-s-prilozhenie-расход-денег-e';
import IISPrilozhenieРегистрОборотEForm from './forms/i-i-s-prilozhenie-регистр-оборот-e';
import IISPrilozhenieТоварыEForm from './forms/i-i-s-prilozhenie-товары-e';
import IISPrilozhenieУслугиEForm from './forms/i-i-s-prilozhenie-услуги-e';
import IISPrilozhenieФинансистыEForm from './forms/i-i-s-prilozhenie-финансисты-e';
import IISPrilozhenieКлиентыModel from './models/i-i-s-prilozhenie-клиенты';
import IISPrilozhenieМатериалыModel from './models/i-i-s-prilozhenie-материалы';
import IISPrilozhenieПереченьМатModel from './models/i-i-s-prilozhenie-перечень-мат';
import IISPrilozhenieПереченьТоваровModel from './models/i-i-s-prilozhenie-перечень-товаров';
import IISPrilozhenieПереченьУслугModel from './models/i-i-s-prilozhenie-перечень-услуг';
import IISPrilozhenieПоставщикиModel from './models/i-i-s-prilozhenie-поставщики';
import IISPrilozhenieПриходДенегModel from './models/i-i-s-prilozhenie-приход-денег';
import IISPrilozhenieРасходДенегModel from './models/i-i-s-prilozhenie-расход-денег';
import IISPrilozhenieРегистрОборотModel from './models/i-i-s-prilozhenie-регистр-оборот';
import IISPrilozhenieСоставТовараModel from './models/i-i-s-prilozhenie-состав-товара';
import IISPrilozhenieТоварыModel from './models/i-i-s-prilozhenie-товары';
import IISPrilozhenieУслугиModel from './models/i-i-s-prilozhenie-услуги';
import IISPrilozhenieФинансистыModel from './models/i-i-s-prilozhenie-финансисты';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-prilozhenie-клиенты': IISPrilozhenieКлиентыModel,
    'i-i-s-prilozhenie-материалы': IISPrilozhenieМатериалыModel,
    'i-i-s-prilozhenie-перечень-мат': IISPrilozhenieПереченьМатModel,
    'i-i-s-prilozhenie-перечень-товаров': IISPrilozhenieПереченьТоваровModel,
    'i-i-s-prilozhenie-перечень-услуг': IISPrilozhenieПереченьУслугModel,
    'i-i-s-prilozhenie-поставщики': IISPrilozhenieПоставщикиModel,
    'i-i-s-prilozhenie-приход-денег': IISPrilozhenieПриходДенегModel,
    'i-i-s-prilozhenie-расход-денег': IISPrilozhenieРасходДенегModel,
    'i-i-s-prilozhenie-регистр-оборот': IISPrilozhenieРегистрОборотModel,
    'i-i-s-prilozhenie-состав-товара': IISPrilozhenieСоставТовараModel,
    'i-i-s-prilozhenie-товары': IISPrilozhenieТоварыModel,
    'i-i-s-prilozhenie-услуги': IISPrilozhenieУслугиModel,
    'i-i-s-prilozhenie-финансисты': IISPrilozhenieФинансистыModel
  },

  'application-name': 'Prilozhenie',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Prilozhenie',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Prilozhenie',
          title: 'Prilozhenie'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        документы: {
          caption: 'Документы',
          title: 'Документы',
          'i-i-s-prilozhenie-расход-денег-l': {
            caption: 'Расход денег',
            title: 'Расход денег'
          },
          'i-i-s-prilozhenie-приход-денег-l': {
            caption: 'Приход денег',
            title: 'Приход денег'
          }
        },
        контрагенты: {
          caption: 'Контрагенты',
          title: 'Контрагенты',
          'i-i-s-prilozhenie-поставщики-l': {
            caption: 'Поставщики',
            title: 'Поставщики'
          },
          'i-i-s-prilozhenie-клиенты-l': {
            caption: 'Клиенты',
            title: 'Клиенты'
          }
        },
        сотрудники: {
          caption: 'Сотрудники',
          title: 'Сотрудники',
          'i-i-s-prilozhenie-финансисты-l': {
            caption: 'Финансисты',
            title: 'Финансисты'
          }
        },
        номенклатура: {
          caption: 'Номенклатура',
          title: 'Номенклатура',
          'i-i-s-prilozhenie-товары-l': {
            caption: 'Товары',
            title: 'Товары'
          },
          'i-i-s-prilozhenie-материалы-l': {
            caption: 'Материалы',
            title: 'Материалы'
          },
          'i-i-s-prilozhenie-услуги-l': {
            caption: 'Услуги',
            title: 'Услуги'
          }
        },
        регистры: {
          caption: 'Регистры',
          title: 'Регистры',
          'i-i-s-prilozhenie-регистр-оборот-l': {
            caption: 'Регистр оборотов',
            title: 'Регистр оборот'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-prilozhenie-клиенты-l': IISPrilozhenieКлиентыLForm,
    'i-i-s-prilozhenie-материалы-l': IISPrilozhenieМатериалыLForm,
    'i-i-s-prilozhenie-поставщики-l': IISPrilozhenieПоставщикиLForm,
    'i-i-s-prilozhenie-приход-денег-l': IISPrilozhenieПриходДенегLForm,
    'i-i-s-prilozhenie-расход-денег-l': IISPrilozhenieРасходДенегLForm,
    'i-i-s-prilozhenie-регистр-оборот-l': IISPrilozhenieРегистрОборотLForm,
    'i-i-s-prilozhenie-товары-l': IISPrilozhenieТоварыLForm,
    'i-i-s-prilozhenie-услуги-l': IISPrilozhenieУслугиLForm,
    'i-i-s-prilozhenie-финансисты-l': IISPrilozhenieФинансистыLForm,
    'i-i-s-prilozhenie-клиенты-e': IISPrilozhenieКлиентыEForm,
    'i-i-s-prilozhenie-материалы-e': IISPrilozhenieМатериалыEForm,
    'i-i-s-prilozhenie-поставщики-e': IISPrilozhenieПоставщикиEForm,
    'i-i-s-prilozhenie-приход-денег-e': IISPrilozhenieПриходДенегEForm,
    'i-i-s-prilozhenie-расход-денег-e': IISPrilozhenieРасходДенегEForm,
    'i-i-s-prilozhenie-регистр-оборот-e': IISPrilozhenieРегистрОборотEForm,
    'i-i-s-prilozhenie-товары-e': IISPrilozhenieТоварыEForm,
    'i-i-s-prilozhenie-услуги-e': IISPrilozhenieУслугиEForm,
    'i-i-s-prilozhenie-финансисты-e': IISPrilozhenieФинансистыEForm
  },

});

export default translations;
