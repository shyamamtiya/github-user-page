import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import { getUserInformation, getUserRepos, searchRepos, filterRepos } from '../actions/userAction';
import UserInfo from '../components/UserInfo/UserInfo';
import Tabs from '../components/Tabs/Tabs';
import Filter from '../components/Filters/Filter';
import RepoList from '../components/Repos/Repos';

const tabs = ['Overview', 'Repositories', 'Starts', 'Followers', 'Following'];
class App extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
			userInformation: {
				userInfo: {},
				userRepos: [],
				filterRepos: [],
			},
		};
  }
  componentDidMount(){
    this.props.getUserInformation('supreetsingh247');
    this.props.getUserRepos('supreetsingh247')
  }

  static getDerivedStateFromProps(props,state){
    return {
      userInformation:props.userInformation
    };
  }

  render() {
    return (
      <div>
        <div className="container">
          <UserInfo userInfo={this.state.userInformation.userInfo} />
          <div className="repositories-section">
            <div className="tabs">
              {
                tabs.map((tab,i) =>
                  <Tabs key={i} tabContent={tab} />
                )
              }
            </div>
            <Filter filterRepos={this.props.filterRepos} searchRepos={this.props.searchRepos}/>
            {
              this.state.userInformation.filterRepos.map((repo,i)=><RepoList key={i} repository={repo}/>)
            }
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state =>{
  return {
    userInformation:state.userInformation
  }
}


export default connect(mapStateToProps,{getUserInformation,getUserRepos,searchRepos,filterRepos})(App);
