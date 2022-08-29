
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
    <div>
      <div className="bg-white pt-[65px] border-b">
        <Row >

          <Col span={6} className="h-14">
            <div className="flex justify-center items-center text-[20px] gap-2 h-14">
              <i className="fa-brands fa-facebook-square cursor-pointer"></i>
              <i className="fa-brands fa-twitter-square cursor-pointer"></i>
              <i className="fa-brands fa-instagram-square cursor-pointer"></i>
              <i className="fa-brands fa-pinterest-square cursor-pointer"></i>
            </div>
          </Col>

          <Col span={12} className="h-14">
            <nav>
              <ul className="flex justify-center items-center text-[17px] gap-4 h-14">
                {NavigateRouter.map((item, index) => {
                  return (
                    <Button key={index} onClick={()=>setSwap(item.path)}>
                      {item.name}
                    </Button>
                  );

                })}
              </ul>
            </nav>
          </Col>

          <Col span={6} className="h-14">
            <div className="flex justify-center items-center gap-2 h-14">
              Design by Truong Nguyen
            </div>
          </Col>

        </Row>
      </div>
      {modify}


    </div>
      {/* <div className='bg-slate-100 pt-[65px] flex justify-center'>

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

      </div> */}
  )
}

export default HomePage