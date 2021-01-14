import React, { PureComponent } from "react";
import { Comment, Tooltip, Avatar } from "antd";
import {DeleteOutlined} from '@ant-design/icons';
import moment from "moment";

export default class CommentItem extends PureComponent {
  render() {
    const { imgurl, datetime, nickname, content } = this.props.comment;
    return (
      <div>
        <Comment
          actions={[<span onClick={e => this.deleteComment()}><DeleteOutlined />删除</span>]}
          author={<a href="/#">{nickname}</a>}
          avatar={<Avatar src={imgurl} alt={nickname} />}
          content={<p>{content}</p>}
          datetime={
            <Tooltip title={datetime.format("YYYY-MM-DD HH:mm:ss")}>
              <span >{datetime.fromNow()}</span>
            </Tooltip>
          }
        />
      </div>
    );
  }
  deleteComment(){
      this.props.deleteComment()
  }
}
