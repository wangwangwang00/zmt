import React, { PureComponent } from 'react'
import moment from 'moment'
import { Input ,Button} from 'antd';
const { TextArea } = Input;
export default class CommentInput extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            comment:''
        }
    }
    render() {
        return (
            <div>
               <TextArea rows={4} value={this.state.comment} onChange={e => this.handleChange(e)}/>
               <Button type="primary" onClick={e => this.addComment()}>添加评论</Button>
            </div>
        )
        
    }
    addComment(){
        const commentInfo = {
            imgurl:"http://p2.music.126.net/pMVnViboITvn_KDmcfoaEA==/109951164873911421.jpg?param=140y140",
            nickname:"mounsey",
            datetime:moment(),
            content:this.state.comment,
            id:moment().valueOf()
        }
        this.props.submitComment(commentInfo)
        this.setState({
            comment:''
        })
    }
    handleChange(e){
        
        this.setState({
            comment:e.target.value
        })
        

    }
}
