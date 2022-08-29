
import React, { useContext, useEffect } from 'react'
import { Row, Col } from "antd";
import AboutComponent from '../components/AboutComponent';
import { BlogContext } from '../contexts/postContext';
import PostComponent from '../components/PostComponent';
const HomePage = () => {
  const {
    State: { post, posts, allPosts, postsLoading },
    getBlogs
  } = useContext(BlogContext)

  if (postsLoading) {
    return (
      <div>
        loading...99%
      </div>
    )
  }
  return (
    <div className='pt-[65px]'>
      <div className=''>
        <Row>
          <Col span={16}>
            <div className="flex flex-wrap">
              {allPosts.map((item, index) => {
                return (
                  <PostComponent
                    key={index}
                    title={item.title}
                    description={item.description}
                    img={item.img}
                    user={item.user}
                    time={item.createAt}
                  />
                );
              })
              }

            </div>
          </Col>
          <Col span={8}>
            <AboutComponent />
          </Col>

        </Row>
      </div>
    </div>
  )
}

export default HomePage