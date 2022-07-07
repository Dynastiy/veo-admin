const items = [{
        id: 1,
        // menu_header: "Menu",
        sub_menu: [{
            id: 1,
            menu_item: "Dashboard",
            url: '/',
            icon: 'apps'
        }, ]
    },
    {
        id: 2,
        sub_menu: [{
                id: 1,
                menu_item: "Plans",
                url: '/plans',
                icon: 'money'
            },

            {
                id: 2,
                menu_item: "Hospitals",
                url: '/hospitals',
                icon: 'night_shelter'
            },

            {
                id: 3,
                menu_item: "Invoices",
                url: '/invoices',
                icon: 'receipt'
            },
            {
                id: 4,
                menu_item: "Payments",
                url: '/payments',
                icon: 'credit_card'
            },
            {
                id: 5,
                menu_item: "Enrollees",
                url: '/enrollees',
                icon: 'people'
            },
            {
                id: 6,
                menu_item: "Services",
                url: '/services',
                icon: 'miscellaneous_services'
            },
            {
                id: 7,
                menu_item: "Drugs",
                url: '/drugs',
                icon: 'medication_liquid'
            },
            {
                id: 8,
                menu_item: "Prices",
                url: '/service-prices',
                icon: 'request_quote'
            },
        ]

    }

]

export default items;