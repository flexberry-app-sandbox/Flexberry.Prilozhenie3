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
    /// Материалы.
    /// </summary>
    // *** Start programmer edit section *** (Материалы CustomAttributes)

    // *** End programmer edit section *** (Материалы CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("МатериалыE", new string[] {
            "ID as \'ID\'",
            "Наименование as \'Наименование\'",
            "Марка as \'Марка\'",
            "Единицы as \'Единицы\'",
            "Стоимость as \'Стоимость\'"})]
    [View("МатериалыL", new string[] {
            "ID as \'ID\'",
            "Наименование as \'Наименование\'",
            "Марка as \'Марка\'",
            "Единицы as \'Единицы\'",
            "Стоимость as \'Стоимость\'"})]
    public class Материалы : ICSSoft.STORMNET.DataObject
    {
        
        private int fID;
        
        private string fНаименование;
        
        private string fМарка;
        
        private IIS.Prilozhenie.Единицы fЕдиницы;
        
        private double fСтоимость;
        
        // *** Start programmer edit section *** (Материалы CustomMembers)

        // *** End programmer edit section *** (Материалы CustomMembers)

        
        /// <summary>
        /// ID.
        /// </summary>
        // *** Start programmer edit section *** (Материалы.ID CustomAttributes)

        // *** End programmer edit section *** (Материалы.ID CustomAttributes)
        public virtual int ID
        {
            get
            {
                // *** Start programmer edit section *** (Материалы.ID Get start)

                // *** End programmer edit section *** (Материалы.ID Get start)
                int result = this.fID;
                // *** Start programmer edit section *** (Материалы.ID Get end)

                // *** End programmer edit section *** (Материалы.ID Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Материалы.ID Set start)

                // *** End programmer edit section *** (Материалы.ID Set start)
                this.fID = value;
                // *** Start programmer edit section *** (Материалы.ID Set end)

                // *** End programmer edit section *** (Материалы.ID Set end)
            }
        }
        
        /// <summary>
        /// Единицы.
        /// </summary>
        // *** Start programmer edit section *** (Материалы.Единицы CustomAttributes)

        // *** End programmer edit section *** (Материалы.Единицы CustomAttributes)
        public virtual IIS.Prilozhenie.Единицы Единицы
        {
            get
            {
                // *** Start programmer edit section *** (Материалы.Единицы Get start)

                // *** End programmer edit section *** (Материалы.Единицы Get start)
                IIS.Prilozhenie.Единицы result = this.fЕдиницы;
                // *** Start programmer edit section *** (Материалы.Единицы Get end)

                // *** End programmer edit section *** (Материалы.Единицы Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Материалы.Единицы Set start)

                // *** End programmer edit section *** (Материалы.Единицы Set start)
                this.fЕдиницы = value;
                // *** Start programmer edit section *** (Материалы.Единицы Set end)

                // *** End programmer edit section *** (Материалы.Единицы Set end)
            }
        }
        
        /// <summary>
        /// Марка.
        /// </summary>
        // *** Start programmer edit section *** (Материалы.Марка CustomAttributes)

        // *** End programmer edit section *** (Материалы.Марка CustomAttributes)
        [StrLen(255)]
        public virtual string Марка
        {
            get
            {
                // *** Start programmer edit section *** (Материалы.Марка Get start)

                // *** End programmer edit section *** (Материалы.Марка Get start)
                string result = this.fМарка;
                // *** Start programmer edit section *** (Материалы.Марка Get end)

                // *** End programmer edit section *** (Материалы.Марка Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Материалы.Марка Set start)

                // *** End programmer edit section *** (Материалы.Марка Set start)
                this.fМарка = value;
                // *** Start programmer edit section *** (Материалы.Марка Set end)

                // *** End programmer edit section *** (Материалы.Марка Set end)
            }
        }
        
        /// <summary>
        /// Наименование.
        /// </summary>
        // *** Start programmer edit section *** (Материалы.Наименование CustomAttributes)

        // *** End programmer edit section *** (Материалы.Наименование CustomAttributes)
        [StrLen(255)]
        public virtual string Наименование
        {
            get
            {
                // *** Start programmer edit section *** (Материалы.Наименование Get start)

                // *** End programmer edit section *** (Материалы.Наименование Get start)
                string result = this.fНаименование;
                // *** Start programmer edit section *** (Материалы.Наименование Get end)

                // *** End programmer edit section *** (Материалы.Наименование Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Материалы.Наименование Set start)

                // *** End programmer edit section *** (Материалы.Наименование Set start)
                this.fНаименование = value;
                // *** Start programmer edit section *** (Материалы.Наименование Set end)

                // *** End programmer edit section *** (Материалы.Наименование Set end)
            }
        }
        
        /// <summary>
        /// Стоимость.
        /// </summary>
        // *** Start programmer edit section *** (Материалы.Стоимость CustomAttributes)

        // *** End programmer edit section *** (Материалы.Стоимость CustomAttributes)
        public virtual double Стоимость
        {
            get
            {
                // *** Start programmer edit section *** (Материалы.Стоимость Get start)

                // *** End programmer edit section *** (Материалы.Стоимость Get start)
                double result = this.fСтоимость;
                // *** Start programmer edit section *** (Материалы.Стоимость Get end)

                // *** End programmer edit section *** (Материалы.Стоимость Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Материалы.Стоимость Set start)

                // *** End programmer edit section *** (Материалы.Стоимость Set start)
                this.fСтоимость = value;
                // *** Start programmer edit section *** (Материалы.Стоимость Set end)

                // *** End programmer edit section *** (Материалы.Стоимость Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "МатериалыE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View МатериалыE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("МатериалыE", typeof(IIS.Prilozhenie.Материалы));
                }
            }
            
            /// <summary>
            /// "МатериалыL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View МатериалыL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("МатериалыL", typeof(IIS.Prilozhenie.Материалы));
                }
            }
        }
    }
}
