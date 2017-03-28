# ng-Resume
An interactive, mobile-friendly resume app in AngularJS
  
## What is ng-Resume?
`ng-Resume` is a simple AngularJS app that renders JSON content into a a responsive web page formatted like a resume/CV. It is lightweight and can be quickly changed to meet your needs. It also provides a quick search function that allows visitors to conveniently browse through the resume to find relevant details.  
  
## Usage
For quick set-up, the only file you need to change is `resume.json`. The file provided illustrates the structure of the `JSON` object in reasonable detail.  
For advanced setup, you can modify `resume.css` to change the appearance of the web page. You can also modify directives in `resume.html` to decide how and which content is displayed. In addition, rearranging `section` class `divs` will reorder different parts of the resume.  
**You can see the app live in action [here](http://hazrmard.github.io/ng-Resume).**  
  
## Testing locally
Since the app uses http requests to get the `json` file, you'll need to set up a local server to view and test the app locally. You can set up a simple server like so:  
1. Install Python  
2. Browse to location of cloned repository  
3. Type in command line:  `python -m SimpleHTTPServer`  
4. Open browser to `http://localhost:8000`  
  
If the computer and a smartphone are connected to the same wireless network, you can view the app on your mobile phone by going to `http://<YOUR_IP_ADDRESS>:8000`. On Windows you can look up your ip address by using `ipconfig` in command line.
