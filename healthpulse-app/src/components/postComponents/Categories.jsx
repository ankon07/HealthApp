import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Base from "../Base";
import { Container, Row, Col } from "reactstrap";
import CategorySideMenu from "./CategorySideMenu";
import {
  loadPostCategoryWise,
  deletePostService,
} from "../../service/post-service";
import { useState } from "react";
import { toast } from "react-toastify";
import Post from "./Post";
import Background from "../basicComponents/Background";
function Categories() {
  const [posts, setPosts] = useState([]);

  const { categoryId } = useParams();
  useEffect(() => {
    console.log(categoryId);
    loadPostCategoryWise(categoryId)
      .then((data) => {
        setPosts([...data]);
      })
      .catch((error) => {
        console.log(error);
        toast.error("error in loading posts");
      });
  }, [categoryId]);

  function deletePost(post) {
    //going to delete post
    console.log(post);

    deletePostService(post.postId)
      .then((res) => {
        console.log(res);
        toast.success("post is deleled..");
        let newPosts = posts.filter((p) => p.postId != post.postId);
        setPosts([...newPosts]);
      })
      .catch((error) => {
        console.log(error);
        toast.error("error in deleting post");
      });
  }

  return (
    <div>
      <Background />
      <Base>
        <Container className="mt-40">
          <Row>
            <Col md={2} className="pt-5">
              <CategorySideMenu />
            </Col>
            <Col md={10}>
              <h1>Blogs Count ( {posts.length} )</h1>

              {posts &&
                posts.map((post, index) => {
                  return (
                    <Post deletePost={deletePost} key={index} post={post} />
                  );
                })}

              {posts.length <= 0 ? <h1>No post in this category</h1> : ""}
            </Col>
          </Row>
        </Container>
      </Base>
    </div>
  );
}

export default Categories;
