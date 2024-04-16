import { request, gql } from "graphql-request";
const MasterUrl =
    "https://api-ap-south-1.hygraph.com/v2/cluwn2bt51fzj07umva7kos6z/master";
  
export const getCourseList = async (level) => {
    const query =
      gql`
      query CourseList {
        courses(where: { level: ` +
      level +
      ` }) {
          id
          name
          level
          author
          price
          publishedAt
          stage
          tags
          time
          updatedBy {
            id
          }
          banner {
            url
          }
          chapter {
      id
      title
      content {
        markdown
      }
      output {
        markdown
      }
    }
           hours
               description {
      markdown
    }
        }
      }
    `;
    const result = await request(MasterUrl, query);
    return result;
}


export const enrollCourse = async (courseid, userEmail) => {
  const mutation = gql`
    mutation MyMutation {
      createUserControlledCourse(
        data: { courseId: "`+courseid+`", userEmail: "`+userEmail+`", course: { connect: { id: "`+courseid+`" } } }
      ) {
        id
      }
      publishManyUserControlledCoursesConnection(to: PUBLISHED) {
        edges {
          node {
            id
          }
        }
      }
    }
  `;
  const result = await request(MasterUrl, mutation);
  return result;
}