﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Prilozhenie
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Перечень услуг.
    /// </summary>
    // *** Start programmer edit section *** (ПереченьУслуг CustomAttributes)

    // *** End programmer edit section *** (ПереченьУслуг CustomAttributes)
    [AutoAltered()]
    [Caption("Перечень услуг")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ПереченьУслугE", new string[] {
            "Услуги as \'Услуги\'",
            "Услуги.Наименование as \'Наименование\'",
            "Количество as \'Количество\'",
            "Услуги.Стоимость as \'Стоимость\'"}, Hidden=new string[] {
            "Услуги.Наименование"})]
    [MasterViewDefineAttribute("ПереченьУслугE", "Услуги", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Наименование")]
    public class ПереченьУслуг : ICSSoft.STORMNET.DataObject
    {
        
        private int fКоличество;
        
        private IIS.Prilozhenie.Услуги fУслуги;
        
        private IIS.Prilozhenie.ПриходДенег fПриходДенег;
        
        // *** Start programmer edit section *** (ПереченьУслуг CustomMembers)

        // *** End programmer edit section *** (ПереченьУслуг CustomMembers)

        
        /// <summary>
        /// Количество.
        /// </summary>
        // *** Start programmer edit section *** (ПереченьУслуг.Количество CustomAttributes)

        // *** End programmer edit section *** (ПереченьУслуг.Количество CustomAttributes)
        public virtual int Количество
        {
            get
            {
                // *** Start programmer edit section *** (ПереченьУслуг.Количество Get start)

                // *** End programmer edit section *** (ПереченьУслуг.Количество Get start)
                int result = this.fКоличество;
                // *** Start programmer edit section *** (ПереченьУслуг.Количество Get end)

                // *** End programmer edit section *** (ПереченьУслуг.Количество Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПереченьУслуг.Количество Set start)

                // *** End programmer edit section *** (ПереченьУслуг.Количество Set start)
                this.fКоличество = value;
                // *** Start programmer edit section *** (ПереченьУслуг.Количество Set end)

                // *** End programmer edit section *** (ПереченьУслуг.Количество Set end)
            }
        }
        
        /// <summary>
        /// Перечень услуг.
        /// </summary>
        // *** Start programmer edit section *** (ПереченьУслуг.Услуги CustomAttributes)

        // *** End programmer edit section *** (ПереченьУслуг.Услуги CustomAttributes)
        [PropertyStorage(new string[] {
                "Услуги"})]
        [NotNull()]
        public virtual IIS.Prilozhenie.Услуги Услуги
        {
            get
            {
                // *** Start programmer edit section *** (ПереченьУслуг.Услуги Get start)

                // *** End programmer edit section *** (ПереченьУслуг.Услуги Get start)
                IIS.Prilozhenie.Услуги result = this.fУслуги;
                // *** Start programmer edit section *** (ПереченьУслуг.Услуги Get end)

                // *** End programmer edit section *** (ПереченьУслуг.Услуги Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПереченьУслуг.Услуги Set start)

                // *** End programmer edit section *** (ПереченьУслуг.Услуги Set start)
                this.fУслуги = value;
                // *** Start programmer edit section *** (ПереченьУслуг.Услуги Set end)

                // *** End programmer edit section *** (ПереченьУслуг.Услуги Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Prilozhenie.ПриходДенег.
        /// </summary>
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "ПриходДенег"})]
        public virtual IIS.Prilozhenie.ПриходДенег ПриходДенег
        {
            get
            {
                IIS.Prilozhenie.ПриходДенег result = this.fПриходДенег;
                return result;
            }
            set
            {
                this.fПриходДенег = value;
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ПереченьУслугE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПереченьУслугE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПереченьУслугE", typeof(IIS.Prilozhenie.ПереченьУслуг));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of ПереченьУслуг.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfПереченьУслуг CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfПереченьУслуг CustomAttributes)
    public class DetailArrayOfПереченьУслуг : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Prilozhenie.DetailArrayOfПереченьУслуг members)

        // *** End programmer edit section *** (IIS.Prilozhenie.DetailArrayOfПереченьУслуг members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type ПереченьУслуг by index.
        /// </summary>
        /// <summary>
        /// Adds object with type ПереченьУслуг.
        /// </summary>
        public DetailArrayOfПереченьУслуг(IIS.Prilozhenie.ПриходДенег fПриходДенег) : 
                base(typeof(ПереченьУслуг), ((ICSSoft.STORMNET.DataObject)(fПриходДенег)))
        {
        }
        
        public IIS.Prilozhenie.ПереченьУслуг this[int index]
        {
            get
            {
                return ((IIS.Prilozhenie.ПереченьУслуг)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Prilozhenie.ПереченьУслуг dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
