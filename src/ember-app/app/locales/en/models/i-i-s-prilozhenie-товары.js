export default {
  projections: {
    ТоварыE: {
      iD: {
        __caption__: 'ID'
      },
      наименование: {
        __caption__: 'Наименование'
      },
      стоимость: {
        __caption__: 'Стоимость'
      },
      составТовара: {
        __caption__: 'Состав товара',
        материалы: {
          __caption__: 'Материалы',
          наименование: {
            __caption__: 'Наименование'
          }
        },
        количество: {
          __caption__: 'Количество'
        },
        единицы: {
          __caption__: 'Единицы'
        }
      }
    },
    ТоварыL: {
      iD: {
        __caption__: 'ID'
      },
      наименование: {
        __caption__: 'Наименование'
      },
      стоимость: {
        __caption__: 'Стоимость'
      }
    }
  },
  validations: {
    iD: {
      __caption__: 'ID'
    },
    наименование: {
      __caption__: 'Наименование'
    },
    стоимость: {
      __caption__: 'Стоимость'
    },
    составТовара: {
      __caption__: 'Состав товара'
    }
  }
};
