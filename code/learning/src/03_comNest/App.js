import React, {
    Component
} from 'react'
//header
function Header() {
    return(
        <div>Header</div>
    )
}
//main
function Banner() {
    return(
        <div>Banner</div>
    )
}
function ProList() {
    return(
        <ul>
            <li>1111</li>
            <li>222</li>
            <li>333</li>
            <li>4444</li>

        </ul>
    )
}
function Main() {
    return(
        <div>
            <Banner/>
            <ProList/>
        </div>
    )
}
// footer
function Footer() {
    return(
        <div>Footer</div>
    )
}



export default class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Main/>
                <Footer/>
            </div>
        )
    }
}