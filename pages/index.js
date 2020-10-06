import React, {useState} from 'react';
import Menu from '../comps/Menu';
import Content from '../comps/Content';
import Signup from '../comps/Signup';

export default function Home() {
  const [contentColor, setContentColor] = useState(false)
  const [contentImg, setContentImg] = useState(false)
  const [contentHelp, setContentHelp] = useState(false)


  const HandleMenu = (str)=>{
    //capture what happened in the menu and change the page state based on it
    //alert(str);
    if(str === 'bg'){
      setContentColor('#DCA877')
    } else if(str === 'img'){
      setContentImg('face.png')
    } else if(str === 'help'){
      setContentHelp('')
    }
  }

  return <div className='home'>
    <div className='content'>
      <Content bgcolor={contentColor}>
        <h1>Welcome to my app</h1>
        <div>Hi</div>
      </Content>
    </div>
    <div className='menu'>
      <Menu onMenuSelect={HandleMenu}/>
    </div>
    <div>
      <Signup />
    </div>
  </div>
}
