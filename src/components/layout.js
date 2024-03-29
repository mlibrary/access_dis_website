import React from 'react'
import PropTypes from 'prop-types'
//import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { Container, Grid, Menu, Input } from 'semantic-ui-react'

import Header from './header'

import 'semantic-ui-less/semantic.less'
import { Link } from 'gatsby'

const LinkedItem = ({ children, ...props }) => (
  <Menu.Item as={Link} activeClassName='active' {...props}>{children}</Menu.Item>
)

const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        {/*<Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
          <Header siteTitle={data.site.siteMetadata.title} />*/}
        
        <Grid stackable colomns={2} style={{marginLeft: 1}}>
        <Grid.Row color='blue' className='navHeader'>
              <Grid.Column width={5}>
                Logo
              </Grid.Column>
              <Grid.Column width={5}>
              <Input className='icon' icon='search' placeholder='Search...' />
              </Grid.Column>
          </Grid.Row>   
         
          <Grid.Row>
               <Menu borderless fluid >
                <LinkedItem to='/' exact>Home</LinkedItem>
                <LinkedItem to='/page-2'>About</LinkedItem>
                <LinkedItem to='/page-2'>Fix It</LinkedItem>
                <LinkedItem to='/page-2'>Resources</LinkedItem>
                <LinkedItem to='/404'>404 Example Page</LinkedItem>
              </Menu>
          </Grid.Row>

        </Grid>
     
        
          <Grid relaxed >
          <Container className='content'>
            <Grid.Column mobile={16} tablet={4} computer={4}>
              
            </Grid.Column>

            <Grid.Column mobile={16} tablet={8} computer={8} >
              {children}
            </Grid.Column>
              </Container>
              <Grid.Row className='footr'>
                <footer>
                  Here
                </footer>
              </Grid.Row>
          </Grid>
      

      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
