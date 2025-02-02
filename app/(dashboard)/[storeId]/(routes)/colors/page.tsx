import { format } from 'date-fns';

import prismadb from '@/prisma/prismadb';
import { ColorsClient } from './components/client';
import { ColorColumn } from './components/columns';

const ColorsPage = async (
    props: {
        params: Promise<{ storeId: string }>
    }
) => {
    const params = await props.params;
    // Récupération des billboards depuis la base de données
    const colors = await prismadb.color.findMany({
        where: {
            storeId: params.storeId,
        },
        orderBy: {
            createdAt: "desc",
        },
    });

    // Transformation des données pour correspondre au type BillboardColumn
    const formattedColors: ColorColumn[] = colors.map((item) => ({
        id: item.id,
        name: item.name,
        value: item.value,
        createdAt: format(item.createdAt, "MMMM do, yyyy"),
    }));

    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <ColorsClient data={formattedColors} />
            </div>
        </div>
    );
};

export default ColorsPage;
