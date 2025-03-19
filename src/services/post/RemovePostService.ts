import prismaClient from "../../prisma";

interface PostRequest {
    id: number;
}

class RemovePostService{
    async execute({id}: PostRequest){
        const post = await prismaClient.post.delete({
            where: {
                id: id
            }
        });

        return post;
    }
}

export default new RemovePostService();