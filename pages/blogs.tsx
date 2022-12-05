import React from 'react'
import Layout from '../src/components/layout'
import Blog from '../src/components/molecules/blog'

function Blogs() {
  return (
    <Layout>
        <h1>i write here, enjoy!</h1>
        <div className='flex flex-wrap justify-center '>
        <Blog title="Officia culpa ex proident proident nisi." desc="Aliqua id cillum minim commodo esse mollit eiusmod eu exercitation aliquip ipsum quis aliquip." date="05-12-2022"/>
        <Blog title="Officia culpa ex proident proident nisi." desc="Aliqua id cillum minim commodo esse mollit eiusmod eu exercitation aliquip ipsum quis aliquip." date="05-12-2022"/>
        <Blog title="Officia culpa ex proident proident nisi." desc="Aliqua id cillum minim commodo esse mollit eiusmod eu exercitation aliquip ipsum quis aliquip." date="05-12-2022"/>
        <Blog title="Officia culpa ex proident proident nisi." desc="Aliqua id cillum minim commodo esse mollit eiusmod eu exercitation aliquip ipsum quis aliquip." date="05-12-2022"/>
        <Blog title="Officia culpa ex proident proident nisi." desc="Aliqua id cillum minim commodo esse mollit eiusmod eu exercitation aliquip ipsum quis aliquip." date="05-12-2022"/>
        <Blog title="Officia culpa ex proident proident nisi." desc="Aliqua id cillum minim commodo esse mollit eiusmod eu exercitation aliquip ipsum quis aliquip." date="05-12-2022"/>
    </div>
    </Layout>
  )
}

export default Blogs