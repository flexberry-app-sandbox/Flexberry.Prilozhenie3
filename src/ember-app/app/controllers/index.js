import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.документы.caption'),
          title: i18n.t('forms.application.sitemap.документы.title'),
          children: [{
            link: 'i-i-s-prilozhenie-расход-денег-l',
            caption: i18n.t('forms.application.sitemap.документы.i-i-s-prilozhenie-расход-денег-l.caption'),
            title: i18n.t('forms.application.sitemap.документы.i-i-s-prilozhenie-расход-денег-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-prilozhenie-приход-денег-l',
            caption: i18n.t('forms.application.sitemap.документы.i-i-s-prilozhenie-приход-денег-l.caption'),
            title: i18n.t('forms.application.sitemap.документы.i-i-s-prilozhenie-приход-денег-l.title'),
            icon: 'folder open',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.контрагенты.caption'),
          title: i18n.t('forms.application.sitemap.контрагенты.title'),
          children: [{
            link: 'i-i-s-prilozhenie-поставщики-l',
            caption: i18n.t('forms.application.sitemap.контрагенты.i-i-s-prilozhenie-поставщики-l.caption'),
            title: i18n.t('forms.application.sitemap.контрагенты.i-i-s-prilozhenie-поставщики-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-prilozhenie-клиенты-l',
            caption: i18n.t('forms.application.sitemap.контрагенты.i-i-s-prilozhenie-клиенты-l.caption'),
            title: i18n.t('forms.application.sitemap.контрагенты.i-i-s-prilozhenie-клиенты-l.title'),
            icon: 'edit',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.сотрудники.caption'),
          title: i18n.t('forms.application.sitemap.сотрудники.title'),
          children: [{
            link: 'i-i-s-prilozhenie-финансисты-l',
            caption: i18n.t('forms.application.sitemap.сотрудники.i-i-s-prilozhenie-финансисты-l.caption'),
            title: i18n.t('forms.application.sitemap.сотрудники.i-i-s-prilozhenie-финансисты-l.title'),
            icon: 'building',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.номенклатура.caption'),
          title: i18n.t('forms.application.sitemap.номенклатура.title'),
          children: [{
            link: 'i-i-s-prilozhenie-товары-l',
            caption: i18n.t('forms.application.sitemap.номенклатура.i-i-s-prilozhenie-товары-l.caption'),
            title: i18n.t('forms.application.sitemap.номенклатура.i-i-s-prilozhenie-товары-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-prilozhenie-материалы-l',
            caption: i18n.t('forms.application.sitemap.номенклатура.i-i-s-prilozhenie-материалы-l.caption'),
            title: i18n.t('forms.application.sitemap.номенклатура.i-i-s-prilozhenie-материалы-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-prilozhenie-услуги-l',
            caption: i18n.t('forms.application.sitemap.номенклатура.i-i-s-prilozhenie-услуги-l.caption'),
            title: i18n.t('forms.application.sitemap.номенклатура.i-i-s-prilozhenie-услуги-l.title'),
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.регистры.caption'),
          title: i18n.t('forms.application.sitemap.регистры.title'),
          children: [{
            link: 'i-i-s-prilozhenie-регистр-оборот-l',
            caption: i18n.t('forms.application.sitemap.регистры.i-i-s-prilozhenie-регистр-оборот-l.caption'),
            title: i18n.t('forms.application.sitemap.регистры.i-i-s-prilozhenie-регистр-оборот-l.title'),
            icon: 'list',
            children: null
          }]
        }
      ]
    };
  }),
})