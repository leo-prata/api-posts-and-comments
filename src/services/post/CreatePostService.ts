import prismaClient from "../../prisma";

interface PostRequest {
    title: string;
    content: string;
}

class CreatePostService{
    async execute({ title, content}: PostRequest){
        const post = await prismaClient.post.create({
            data: {
                title,
                content
            }
        });

        return post;
    }
}

export default new CreatePostService();