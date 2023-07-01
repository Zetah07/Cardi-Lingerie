"use client";

import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";

export const BillboardClient =() => {
    const router = useRouter();
    const params = useParams();

    return(
        <>
            <div className="flex items-center justify-between">
                <Heading
                    title='Carteras (0)'
                    description="Carteras de productos que se muestran en la tienda."
                />
                <Button onClick={() => router.push(`/${params.storeId}/billboards/mew`)}>
                    <Plus className="mr-2 h-4 w-4" />
                    Agregar Cartera
                </Button>
            </div>
            <Separator />
        </>
    )
}