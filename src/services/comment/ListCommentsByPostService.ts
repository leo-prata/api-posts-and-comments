import prismaClient from "../../prisma";

interface CommentRequest {
    postId: number;
}

class ListCommentsByPostService{
    async execute({ postId }: CommentRequest){
        const comments = await prismaClient.comment.findMany({
            where: {
                postId
            },
            select: {
                id: true,
                content: true,
            },
            orderBy: {
                createdAt: "desc"
            }
            
        });

        return comments;
    }
}

export default new ListCommentsByPostService();