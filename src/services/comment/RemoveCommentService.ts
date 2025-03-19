import prismaClient from "../../prisma";

interface CommentRequest {
    id: number;
}

class RemoveCommentService{
    async execute({ id }: CommentRequest){
        const comment = await prismaClient.comment.delete({
            where: {
                id: id
            }
        });

        return comment;
    }
}

export default new RemoveCommentService();