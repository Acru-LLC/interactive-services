import i18n from "@/i18n";
import {ability} from '@/shared/store/ability'

export default [
    {
        name: "Price",
        path: "/price",
        redirect: "/price",
        component: () => import('@/router/views/dashboards/default'),
        meta: {
            bcLinkText: i18n.t("submodules.application_before_commission.title"),
            bcTo: {name: "Pharm"}
        },
        children: [
            // {
            //     name: 'priceStations',
            //     path: '/price/stations',
            //     component: () => import('@/modules/fair-price/stations/Index.vue'),
            //     meta: {
            //         authRequired: true,
            //     }
            // }
        ]
    }
]
