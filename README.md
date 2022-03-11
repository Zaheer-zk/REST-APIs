# REST-APIs

POST – This would be used to create a new employee using the RESTful web service
GET – This would be used to get a list of all employee using the RESTful web service
PUT – This would be used to update all employee using the RESTful web service
DELETE – This would be used to delete all employee using the RESTful services

## Tutorial

REST is a way to access resources which lie in a particular environment. For example, you could have a server that could be hosting important documents or pictures or videos. All of these are an example of resources. If a client, say a web browser needs any of these resources, it has to send a request to the server to access these resources. Now REST services defines a way on how these resources can be accessed.


Resources – The first key element is the resource itself. Let assume that a web application on a server has records of several employees. Let’s assume the URL of the web application. Now in order to access an employee record resource via REST services, one can issue the command – This command tells the web server to please provide the details of the employee whose employee number is 1.
Request Verbs – These describe what you want to do with the resource. A browser issues a GET verb to instruct the endpoint it wants to get data. However, there are many other verbs available including things like POST, PUT, and DELETE. So in the case of the example http://demo.custom.com/employee/1 , the web browser is actually issuing a GET Verb because it wants to get the details of the employee record.
Request Headers – These are additional instructions sent with the request. These might define the type of response required or the authorization details.
Request Body – Data is sent with the request. Data is normally sent in the request when a POST request is made to the REST web services. In a POST call, the client actually tells the REST web services that it wants to add a resource to the server. Hence, the request body would have the details of the resource which is required to be added to the server.
Response Body – This is the main body of the response. So in our RESTful API example, if we were to query the web server via the request http://demo.custom.com/employee/1 , the web server might return an XML document with all the details of the employee in the Response Body.
Response Status codes – These codes are the general codes which are returned along with the response from the web server. An example is the code 200 which is normally returned if there is no error when returning a response to the client.
