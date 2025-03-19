import prismaClient from "../../prisma";

class ListPostService{
    async execute(){
        const posts = await prismaClient.post.findMany({
            select: {
                title: true,
                content: true,
                id: true,
            }
        });

        return posts;
    }
}

export default new ListPostService();