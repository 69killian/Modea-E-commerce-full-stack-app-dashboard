"use client";

import { Heading } from "@/components/ui/Heading";
import { Separator } from "@/components/ui/separator";
import { OrderColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";


interface OrderClientProps {
    data: OrderColumn[]
}

export const OrderClient: React.FC<OrderClientProps> = ({
    data
}) => {

    return (
        <>
                <Heading
                title={`Commandes (${data.length})`}
                description="Gérer les Commandes de votre Boutique"
                />
            <Separator/>
            <DataTable searchKey="products" columns={columns} data={data}/>
        </>
    )
}