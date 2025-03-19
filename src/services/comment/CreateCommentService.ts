import prismaClient from "../../prisma";

interface CommentRequest {
    content: string;
    postId: number;
}

class CreateCommentService{
    async execute({content, postId}: CommentRequest){
        const comment = await prismaClient.comment.create({
            data: {
                content,
                postId
            }
        });

        return comment;
    }
}

export default new CreateCommentService();