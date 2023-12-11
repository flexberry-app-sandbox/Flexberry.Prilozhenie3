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
    /// Приход денег.
    /// </summary>
    // *** Start programmer edit section *** (ПриходДенег CustomAttributes)

    // *** End programmer edit section *** (ПриходДенег CustomAttributes)
    [AutoAltered()]
    [Caption("Приход денег")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ПриходДенегE", new string[] {
            "ID as \'ID\'",
            "Дата as \'Дата\'",
            "ТипПрихода as \'Тип прихода\'",
            "Клиенты as \'Клиенты\'",
            "Клиенты.ФИО as \'Клиент ФИО \'",
            "Финансисты as \'Финансисты\'",
            "Финансисты.ФИО as \'Финансист ФИО\'",
            "Сумма as \'Сумма\'"}, Hidden=new string[] {
            "Клиенты.ФИО",
            "Финансисты.ФИО"})]
    [AssociatedDetailViewAttribute("ПриходДенегE", "ПереченьТоваров", "ПереченьТоваровE", true, "", "Перечень товаров", true, new string[] {
            ""})]
    [AssociatedDetailViewAttribute("ПриходДенегE", "ПереченьУслуг", "ПереченьУслугE", true, "", "Перечень услуг", true, new string[] {
            ""})]
    [MasterViewDefineAttribute("ПриходДенегE", "Клиенты", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "ФИО")]
    [MasterViewDefineAttribute("ПриходДенегE", "Финансисты", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "ФИО")]
    [View("ПриходДенегL", new string[] {
            "ID as \'ID\'",
            "Дата as \'Дата\'",
            "ТипПрихода as \'Тип прихода\'",
            "Сумма as \'Сумма\'",
            "Клиенты.ФИО as \'Клиент ФИО\'",
            "Финансисты.ФИО as \'Финансист ФИО\'"})]
    public class ПриходДенег : ICSSoft.STORMNET.DataObject
    {
        
        private int fID;
        
        private System.DateTime fДата;
        
        private IIS.Prilozhenie.ТипПрихода fТипПрихода;
        
        private double fСумма;
        
        private IIS.Prilozhenie.Клиенты fКлиенты;
        
        private IIS.Prilozhenie.Финансисты fФинансисты;
        
        private IIS.Prilozhenie.DetailArrayOfПереченьТоваров fПереченьТоваров;
        
        private IIS.Prilozhenie.DetailArrayOfПереченьУслуг fПереченьУслуг;
        
        // *** Start programmer edit section *** (ПриходДенег CustomMembers)

        // *** End programmer edit section *** (ПриходДенег CustomMembers)

        
        /// <summary>
        /// ID.
        /// </summary>
        // *** Start programmer edit section *** (ПриходДенег.ID CustomAttributes)

        // *** End programmer edit section *** (ПриходДенег.ID CustomAttributes)
        public virtual int ID
        {
            get
            {
                // *** Start programmer edit section *** (ПриходДенег.ID Get start)

                // *** End programmer edit section *** (ПриходДенег.ID Get start)
                int result = this.fID;
                // *** Start programmer edit section *** (ПриходДенег.ID Get end)

                // *** End programmer edit section *** (ПриходДенег.ID Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПриходДенег.ID Set start)

                // *** End programmer edit section *** (ПриходДенег.ID Set start)
                this.fID = value;
                // *** Start programmer edit section *** (ПриходДенег.ID Set end)

                // *** End programmer edit section *** (ПриходДенег.ID Set end)
            }
        }
        
        /// <summary>
        /// Дата.
        /// </summary>
        // *** Start programmer edit section *** (ПриходДенег.Дата CustomAttributes)

        // *** End programmer edit section *** (ПриходДенег.Дата CustomAttributes)
        public virtual System.DateTime Дата
        {
            get
            {
                // *** Start programmer edit section *** (ПриходДенег.Дата Get start)

                // *** End programmer edit section *** (ПриходДенег.Дата Get start)
                System.DateTime result = this.fДата;
                // *** Start programmer edit section *** (ПриходДенег.Дата Get end)

                // *** End programmer edit section *** (ПриходДенег.Дата Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПриходДенег.Дата Set start)

                // *** End programmer edit section *** (ПриходДенег.Дата Set start)
                this.fДата = value;
                // *** Start programmer edit section *** (ПриходДенег.Дата Set end)

                // *** End programmer edit section *** (ПриходДенег.Дата Set end)
            }
        }
        
        /// <summary>
        /// Сумма.
        /// </summary>
        // *** Start programmer edit section *** (ПриходДенег.Сумма CustomAttributes)

        // *** End programmer edit section *** (ПриходДенег.Сумма CustomAttributes)
        public virtual double Сумма
        {
            get
            {
                // *** Start programmer edit section *** (ПриходДенег.Сумма Get start)

                // *** End programmer edit section *** (ПриходДенег.Сумма Get start)
                double result = this.fСумма;
                // *** Start programmer edit section *** (ПриходДенег.Сумма Get end)

                // *** End programmer edit section *** (ПриходДенег.Сумма Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПриходДенег.Сумма Set start)

                // *** End programmer edit section *** (ПриходДенег.Сумма Set start)
                this.fСумма = value;
                // *** Start programmer edit section *** (ПриходДенег.Сумма Set end)

                // *** End programmer edit section *** (ПриходДенег.Сумма Set end)
            }
        }
        
        /// <summary>
        /// ТипПрихода.
        /// </summary>
        // *** Start programmer edit section *** (ПриходДенег.ТипПрихода CustomAttributes)

        // *** End programmer edit section *** (ПриходДенег.ТипПрихода CustomAttributes)
        public virtual IIS.Prilozhenie.ТипПрихода ТипПрихода
        {
            get
            {
                // *** Start programmer edit section *** (ПриходДенег.ТипПрихода Get start)

                // *** End programmer edit section *** (ПриходДенег.ТипПрихода Get start)
                IIS.Prilozhenie.ТипПрихода result = this.fТипПрихода;
                // *** Start programmer edit section *** (ПриходДенег.ТипПрихода Get end)

                // *** End programmer edit section *** (ПриходДенег.ТипПрихода Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПриходДенег.ТипПрихода Set start)

                // *** End programmer edit section *** (ПриходДенег.ТипПрихода Set start)
                this.fТипПрихода = value;
                // *** Start programmer edit section *** (ПриходДенег.ТипПрихода Set end)

                // *** End programmer edit section *** (ПриходДенег.ТипПрихода Set end)
            }
        }
        
        /// <summary>
        /// Приход денег.
        /// </summary>
        // *** Start programmer edit section *** (ПриходДенег.Клиенты CustomAttributes)

        // *** End programmer edit section *** (ПриходДенег.Клиенты CustomAttributes)
        [PropertyStorage(new string[] {
                "Клиенты"})]
        [NotNull()]
        public virtual IIS.Prilozhenie.Клиенты Клиенты
        {
            get
            {
                // *** Start programmer edit section *** (ПриходДенег.Клиенты Get start)

                // *** End programmer edit section *** (ПриходДенег.Клиенты Get start)
                IIS.Prilozhenie.Клиенты result = this.fКлиенты;
                // *** Start programmer edit section *** (ПриходДенег.Клиенты Get end)

                // *** End programmer edit section *** (ПриходДенег.Клиенты Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПриходДенег.Клиенты Set start)

                // *** End programmer edit section *** (ПриходДенег.Клиенты Set start)
                this.fКлиенты = value;
                // *** Start programmer edit section *** (ПриходДенег.Клиенты Set end)

                // *** End programmer edit section *** (ПриходДенег.Клиенты Set end)
            }
        }
        
        /// <summary>
        /// Приход денег.
        /// </summary>
        // *** Start programmer edit section *** (ПриходДенег.Финансисты CustomAttributes)

        // *** End programmer edit section *** (ПриходДенег.Финансисты CustomAttributes)
        [PropertyStorage(new string[] {
                "Финансисты"})]
        [NotNull()]
        public virtual IIS.Prilozhenie.Финансисты Финансисты
        {
            get
            {
                // *** Start programmer edit section *** (ПриходДенег.Финансисты Get start)

                // *** End programmer edit section *** (ПриходДенег.Финансисты Get start)
                IIS.Prilozhenie.Финансисты result = this.fФинансисты;
                // *** Start programmer edit section *** (ПриходДенег.Финансисты Get end)

                // *** End programmer edit section *** (ПриходДенег.Финансисты Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПриходДенег.Финансисты Set start)

                // *** End programmer edit section *** (ПриходДенег.Финансисты Set start)
                this.fФинансисты = value;
                // *** Start programmer edit section *** (ПриходДенег.Финансисты Set end)

                // *** End programmer edit section *** (ПриходДенег.Финансисты Set end)
            }
        }
        
        /// <summary>
        /// Приход денег.
        /// </summary>
        public virtual IIS.Prilozhenie.DetailArrayOfПереченьТоваров ПереченьТоваров
        {
            get
            {
                if ((this.fПереченьТоваров == null))
                {
                    this.fПереченьТоваров = new IIS.Prilozhenie.DetailArrayOfПереченьТоваров(this);
                }
                IIS.Prilozhenie.DetailArrayOfПереченьТоваров result = this.fПереченьТоваров;
                return result;
            }
            set
            {
                this.fПереченьТоваров = value;
            }
        }
        
        /// <summary>
        /// Приход денег.
        /// </summary>
        public virtual IIS.Prilozhenie.DetailArrayOfПереченьУслуг ПереченьУслуг
        {
            get
            {
                if ((this.fПереченьУслуг == null))
                {
                    this.fПереченьУслуг = new IIS.Prilozhenie.DetailArrayOfПереченьУслуг(this);
                }
                IIS.Prilozhenie.DetailArrayOfПереченьУслуг result = this.fПереченьУслуг;
                return result;
            }
            set
            {
                this.fПереченьУслуг = value;
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ПриходДенегE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПриходДенегE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПриходДенегE", typeof(IIS.Prilozhenie.ПриходДенег));
                }
            }
            
            /// <summary>
            /// "ПриходДенегL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПриходДенегL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПриходДенегL", typeof(IIS.Prilozhenie.ПриходДенег));
                }
            }
        }
    }
}
