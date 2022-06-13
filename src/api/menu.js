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
                icon: 'medication_liquid'
            },
            {
                id: 3,
                menu_item: "Pharmacies",
                url: '/pharmacies',
                icon: 'medication'
            },
            {
                id: 4,
                menu_item: "Labs",
                url: '/labs',
                icon: 'vaccines'
            },
            {
                id: 5,
                menu_item: "Invoices",
                url: '/invoices',
                icon: 'receipt'
            },
            {
                id: 6,
                menu_item: "Payments",
                url: '/payments',
                icon: 'credit_card'
            },
            {
                id: 7,
                menu_item: "Enrollees",
                url: '/enrollees',
                icon: 'people'
            },
            {
                id: 8,
                menu_item: "Services",
                url: '/services',
                icon: 'miscellaneous_services'
            },
        ]

    }

]

export default items;