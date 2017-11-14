import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'

const cardStyle = {
  width: "100%"
}


function TopStoriesCards(props){

  return (
    <div>
    {props.posts.map((post) => {
      return(
      post.multimedia[0] ?
      <Card style={cardStyle}>
        <Image src={post.multimedia[4]["url"]} />
          <Card.Content>
            <Card.Meta>
              <span className='date'>
                {post.multimedia[0].copyright}
              </span>
            </Card.Meta>
            <Card.Header>
              {post.title}
            </Card.Header>
              <Card.Description>
                {post.abstract}
              </Card.Description>
          </Card.Content>

          <Card.Content extra>
          <a><Icon name='user' />{post.published_date}</a>
          </Card.Content>
      </Card>: "cards are unable to disclose"
      )
    })}
  </div>
  )
}

export default TopStoriesCards;
