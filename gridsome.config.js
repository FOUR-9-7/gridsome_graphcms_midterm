// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Sage IT',
  siteUrl: 'https://FOUR-9-7.github.io',
  pathPrefix: '/gridsome_graphcms_midterm',

  plugins: [
    {
      use: '@gridsome/source-graphql',
      options: {
        url: 'https://api-ap-northeast-1.graphcms.com/v2/ckrndkiws3r1l01wegxvsds2r/master',
        fieldName: 'gcms',
        typeName: 'gcmsTypes',
        headers: {
          Authorization: "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2Mjc0Njk5MjQsImF1ZCI6WyJodHRwczovL2FwaS1hcC1ub3J0aGVhc3QtMS5ncmFwaGNtcy5jb20vdjIvY2tybmRraXdzM3IxbDAxd2VneHZzZHMyci9tYXN0ZXIiLCJodHRwczovL21hbmFnZW1lbnQtbmV4dC5ncmFwaGNtcy5jb20iXSwiaXNzIjoiaHR0cHM6Ly9tYW5hZ2VtZW50LmdyYXBoY21zLmNvbS8iLCJzdWIiOiJiY2NmYmU1My00OGQ5LTQ0YmMtODE0Ny0yMWFjNDMwNjYwMDgiLCJqdGkiOiJja2c4MzVvYXByNGZpMDF3ZTk4amw3ODB0In0.Oap38olMOp1TG3uhOvgRIoeHTGqBubQLZzIBqjWD8RZvPYvCI_-JqmR8wVR19AWfElJARF7AoFNmJOWjIsk9KMgJ4UF3-VlEjstjoYFS5_FH2_nFnYBftqR5L7rofaSx-b5sFNIHBh45gCFQDKPxGb7Yj3SP3kHZRL3RDHAoUOqUmk_RvB50KuXQL9Zd0JN1DOxRG8IENpTVsrS7w91VS5IrILn4NVD4-6_e7709H36YVadYluuU3vzi2wYbca7V3_R5_ePk8xsNMvwpZnFUtPZcTrItkU4z3mJrwqEOVipYHJB-BIq91cxYa4uuVh1-9-IOcDOsUx8NAigsXplnv-oyBtBKKU5MJHdp3enEti7DVBcqts1s4B1R3qD_6SiYbehdsWUHQmIdhL0lmwRRuRaLGV7fp2fpl3zOxXcoklLk19rGlrJRwAKfUhZimLWHGNYs3sruqNB7RdA1tJOKS58j7O6joKvrtB37NUh6VaD1-wBbIfz2NOuR-8h7Q5eYb5wh4l9FQC4kjqLWBpCij3SD5xbSaC0byGC3DLxwpAbA8q5avRmyxtduVFQrJEYxMQ7JLXsWZAWKwto5fi_rvfdQGLTUCm2qQzxdcfvwaPY00KqsNPxxHmw4x3svQuNcilmhGrpclXzWR-keO6k4yAeQC3JNKWhUjBSW57CtOnI"
        }

      }
    }
  ]
}
