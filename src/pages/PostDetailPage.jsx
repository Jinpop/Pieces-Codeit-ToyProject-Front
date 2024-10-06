import { useParams } from "react-router-dom";
import Header from "../components/Other/Header";
import PostDetail from "../components/Post/PostDetail"
import { useEffect, useState } from "react";
import { GetPostComments, GetPostDetail } from "../api/PostApi";
import PostContents from "../components/Post/PostContents";
import CheckPost from "../components/Post/CheckPost";
import CommentHeader from "../components/Comment/CommentHeader";

const PostDetailPage = () => {
    const { postid } = useParams();
    const [loading, setLoading] = useState(true);
    const [secret, setSecret] = useState(true);
    const [data, setData] = useState(null);
    const [commentData, setCommentData] = useState(null);
    const [comments, setComments] = useState(null);

    useEffect(() => {
        const GetComments = async () => {
            setLoading(true);
            try {
                const result = await GetPostComments(postid);
                setComments(result.data);
                setCommentData(result);
            }
            catch (err) {
                console.err(err)
            }
            finally {
                setLoading(false);
            }
        }

        const GetData = async () => {
            setLoading(true);
            try {
                const result = await GetPostDetail(postid);
                setSecret(result.isPublic);
                setData(result);
            }
            catch (err) {
                console.err(err)
            }
            finally {
                GetComments();
            }
        }

        GetData();    
    }, [])

    if (loading) {
        return <div className="loading"></div>
    }

    return (
        <>
            <Header />
            {loading ? "" :
                <>
                    {secret ?
                        <>
                            <PostDetail title={data.title} nickname={data.nickname} tags={data.tags} location={data.location} moment={data.moment} isPublic={data.isPublic} likeCount={data.likeCount} commentCount={data.commentCount} />
                            <PostContents imageUrl={data.imageUrl} content={data.content} />
                            <CommentHeader commentCount={data.commentCount} comments={comments} />                            
                        </>
                        :
                        <>
                            <CheckPost setSecret={setSecret} comments={comments}/>                            
                        </>}
                </>
            }
        </>
    )
}

export default PostDetailPage;