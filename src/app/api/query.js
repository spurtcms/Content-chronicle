
// export const GET_POSTS_LIST_QUERY = `query($channelId: Int, $title:String $categoryId: Int,$limit: Int!,$offset: Int!){
//   channelEntriesList(channelId: $channelId,title:$title,categoryId: $categoryId, limit: $limit,offset: $offset){
//     channelEntriesList{
//       id
//       title
//       metaTitle
//       metaDescription
//       slug
//       description
//       userId
//       channelId
//       status
//       isActive
//       createdOn
//       createdBy
//       modifiedBy
//       modifiedOn
//       coverImage
//       thumbnailImage
//       metaTitle
//       metaDescription
//       keyword
//       categoriesId
//       relatedArticles
//       featuredEntry
//       categories{
//         id
//         categoryName
//         imagePath
//         parentId
//       }
//       authorDetails{
//         AuthorId
//         FirstName
//         LastName
//         ProfileImagePath
//         IsActive
//         CreatedBy
//       }
//     }
//     count
//   }
// }`;

//new

export const GET_POSTS_LIST_QUERY = `query ChannelEntriesList(
$commonFilter: Filter
$sort: Sort
$entryFilter: EntriesFilter
$AdditionalData: EntriesAdditionalData
){
  ChannelEntriesList(commonFilter:$commonFilter,
    sort:$sort,entryFilter:$entryFilter,
    AdditionalData:$AdditionalData){
    channelEntriesList{
      id
      title
      slug
      description
      userId
      channelId
      status
      isActive
      createdOn
      createdBy
      modifiedBy
      modifiedOn
      coverImage
      thumbnailImage
      metaTitle
      metaDescription
      keyword
      categoriesId
      relatedArticles
      featuredEntry
      viewCount
      author
      sortOrder
      createTime
      publishedTime
      readingTime
      tags
      excerpt
      imageAltTag
      categories{
        id
        categoryName
        categorySlug
        description
        imagePath
        createdOn
        createdBy
        modifiedOn
        modifiedBy
        parentId
        tenantId
      }
     
      authorDetails{
        id
        firstName
        lastName
        email
        mobileNo
        isActive
        profileImagePath
        createdOn
        createdBy
        modifiedOn
        modifiedBy
        tenantId
      }
      
    }
  }
  
}`;












  // export const GET_POSTS_CATEGORYLIST_QUERY = `query($hierarchylevel: Int!){
  //   categoriesList(hierarchyLevel: $hierarchylevel){
  //     categories{
  //       id
  //       categoryName
  //       categorySlug
  //       parentId
  //     }
  //   }
  // }
  // `;

  //new
  //didnt use

  // export const GET_POSTS_CATEGORYLIST_QUERY = `query CategoryList($categoryFilter: CategoryFilter
  // $commonFilter: Filter){
  //   CategoryList(categoryFilter:$categoryFilter, 
  //     commonFilter:$commonFilter){
  //     categorylist{
  //       id
  //       categoryName
  //       categorySlug
  //       description
  //       imagePath
  //       createdOn
  //       createdBy
  //       modifiedOn
  //       modifiedBy
  //       parentId
  //       tenantId
  //     },
  //     count
  //   }
  // }`

  
// export const GET_POSTS_SLUG_QUERY = `query($slug: String!){
//     channelEntryDetail(slug:$slug){
//         id
//         title
//         metaTitle
//         metaDescription
//         slug
//         description
//         userId
//         channelId
//         status
//         isActive
//         coverImage
//         categoriesId
//         categories{
//           id
//           categoryName
//           imagePath
//           parentId
//         }
//         authorDetails{
//           FirstName
//           LastName
//           Email
//           MobileNo
//           ProfileImagePath
//         }
//       }
//     }
//   `

//new
export const GET_POSTS_SLUG_QUERY = `query ChannelEntryDetail(
$id: Int
$slug: String
$AdditionalData: EntriesAdditionalData
){
  ChannelEntryDetail(id:$id,slug:$slug,
    AdditionalData:$AdditionalData){
    id
    title
    slug
    description
    userId
    channelId
    status
    isActive
    createdOn
    createdBy
    modifiedBy
    modifiedOn
    coverImage
    thumbnailImage
    metaTitle
    metaDescription
    keyword
    categoriesId
    relatedArticles
    featuredEntry
    viewCount
    author
    sortOrder
    createTime
    publishedTime
    readingTime
    tags
    excerpt
    imageAltTag
    categories{
        id
        categoryName
        categorySlug
        description
        imagePath
        createdOn
        createdBy
        modifiedOn
        modifiedBy
        parentId
        tenantId
      }
      additionalFields{
        sections{
          id
          sectionName
          sectionTypeId
          createdOn
          createdBy
          modifiedOn
          modifiedBY
          orderIndex
          tenantId
        }
        fields{
          id
          fieldName
          fieldTypeId
          mandatoryField
          optionExist
          createdOn
          createdBy
          modifiedOn
          modifiedBY
          fieldDesc
          orderIndex
          imagePath
          datetimeFormat
          timeFormat
          sectionParentId
          characterAllowed
          fieldTypeName
          fieldValue{
            id
            fieldValue
            createdOn
            createdBy
            modifiedOn
            modifiedBY
            tenantId
          }
          fieldOptions{
            id
            optionName
            optionValue
            createdOn
            createdOn
            createdBy
            modifiedOn
            modifiedBY
            tenantId
          }
          tenantId 
        }
      }
      authorDetails{
        id
        firstName
        lastName
        email
        mobileNo
        isActive
        profileImagePath
        createdOn
        createdBy
        modifiedOn
        modifiedBy
        tenantId
      }
      memberProfile{
        id
        memberId
        profileName
        profileSlug
        profilePage
        memberDetails
        companyName
        companyLocation
        companyLogo
        about
        seoTitle
        seoKeyword
        seoDescription
        linkedin
        twitter
        website
        createdBy
        createdOn
        modifiedOn
        modifiedBy
        claimStatus
        IsActive
        tenantId
        claimDate
      }
    tenantId
    contentChunk{
      data
      length
    }
  }
}
`

  // export const GET_POSTS_CHANNELLIST_QUERY=`query($limit: Int!,$offset: Int!){
  //   channelList(limit:$limit,offset:$offset){
  //     channellist{
  //       id
  //       channelName
  //       channelDescription
  //       slugName
  //       fieldGroupId
  //       isActive
  //       createdOn
  //       createdBy
  //       modifiedOn
  //       modifiedBy
  //     }
  //   }
  // }`
  
  //new
  export const GET_POSTS_CHANNELLIST_QUERY=`query ChannelList(
$filter: Filter
$sort: Sort
){
  ChannelList(filter:$filter,sort:$sort){
    channellist{
      id
      channelName
      channelDescription
      slugName
      fieldGroupId
      isActive
      createdOn
      createdBy
      isDeleted
      modifiedOn
      modifiedBy
      tenantId
    },
    count
  }
}
`

  // export const GET_POSTS_CHANNELLIST_SLUG_QUERY=`
  // query($channelSlug:String!){
  //   channelDetail(channelSlug:$channelSlug){
  //     id
  //     slugName
  //     channelName
  //     channelDescription
  //   }
  // }`
  
  //new
  export const GET_POSTS_CHANNELLIST_SLUG_QUERY=`
  query ChannelDetail(
$channelId: Int
$channelSlug: String
$isActive: Boolean
){
  ChannelDetail(channelId:$channelId,
  channelSlug:$channelSlug,isActive:$isActive){
    id
    channelName
    channelDescription
    slugName
    fieldGroupId
    isActive
    createdOn
    createdBy
    isDeleted
    modifiedOn
    createdBy
    isDeleted
    modifiedOn
    modifiedBy
    tenantId
  }
}`
  



  // export const GET_POSTS_QUERY_CATEGORY = `query($hierarchylevel: Int!){
  //   categoriesList(hierarchyLevel: $hierarchylevel){
  //     categories{
  //       id
  //       categoryName
  //       categorySlug
  //       parentId
  //     }
  //   }
  // }
  // `;


//new
//didnt use

// export const GET_POSTS_QUERY_CATEGORY = `query CategoryList($categoryFilter: CategoryFilter
//   $commonFilter: Filter){
//     CategoryList(categoryFilter:$categoryFilter, 
//       commonFilter:$commonFilter){
//       categorylist{
//         id
//         categoryName
//         categorySlug
//         description
//         imagePath
//         createdOn
//         createdBy
//         modifiedOn
//         modifiedBy
//         parentId
//         tenantId
//       },
//       count
//     }
//   }`
