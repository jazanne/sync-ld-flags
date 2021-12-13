var c="https://app.launchdarkly.com",o=(e,t)=>{let n=g(e,t);return n>-1?e[n+1]:""},g=(e,t)=>{for(let n of t.name){let r=e.indexOf(n);if(r>-1)return r}return-1},m={script(e){let t=o(e,s);return`curl -s -X GET     ${o(e,i)||c}/api/v2/projects     -H 'Authorization: ${t}'`},postProcess(e){return JSON.parse(e).items.map(n=>({name:n.key,insertValue:n.key,description:n.name}))}},a={script(e){let t=o(e,s),n=o(e,p);return`curl -s -X GET     ${o(e,i)||c}/api/v2/projects/${n}     -H 'Authorization: ${t}'`},postProcess(e){return JSON.parse(e).environments.map(n=>({name:n.key,insertValue:n.key,description:n.name}))}},p={name:["--project-key","-p"],description:"Project key",args:{name:"project-key",debounce:!0,generators:m}},s={name:["--api-token","-t"],description:"API token",args:{name:"api-token"}},i={name:["--host","-H"],description:"Hostname override",args:{name:"host"}},u={name:"sync-ld-flags",description:"LaunchDarkly Environment Synchronizer",options:[{name:["--help","-h"],description:"Show help for sync-ld-flags"},p,{name:["--source-env","-s"],description:"Source environment",dependsOn:["-p"],args:{name:"source-env",debounce:!0,generators:a}},{name:["--destination-env","-d"],description:"Destination environment",dependsOn:["-p"],args:{name:"source-env",debounce:!0,generators:a}},s,{name:["--omit-segments","-o"],description:"Omit segments when syncing"},{name:["--dry-run"],description:"Preview syncing changes"},i,{name:["--debug","-D"],description:"Enables HTTP debugging"}]},d=u;export{d as default};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL3N5bmMtbGQtZmxhZ3MudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbInR5cGUgUHJvamVjdCA9IHtcbiAgbmFtZTogc3RyaW5nLFxuICBrZXk6IHN0cmluZ1xufVxuXG50eXBlIEVudmlyb25tZW50ID0ge1xuICBuYW1lOiBzdHJpbmcsXG4gIGtleTogc3RyaW5nXG59XG5cbmNvbnN0IERFRkFVTFRfSE9TVCA9ICdodHRwczovL2FwcC5sYXVuY2hkYXJrbHkuY29tJztcblxuY29uc3QgZ2V0T3B0aW9uRnJvbUNvbnRleHQgPSAoY29udGV4dCwgb3B0aW9uOiBGaWcuT3B0aW9uKSA9PiB7XG4gIGNvbnN0IGluZGV4ID0gZ2V0T3B0aW9uSW5kZXhGcm9tQ29udGV4dChjb250ZXh0LCBvcHRpb24pO1xuICBjb25zdCB2YWx1ZSA9IGluZGV4ID4gLTEgPyBjb250ZXh0W2luZGV4KzFdIDogJyc7XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5jb25zdCBnZXRPcHRpb25JbmRleEZyb21Db250ZXh0ID0gKGNvbnRleHQsIG9wdGlvbjogRmlnLk9wdGlvbikgPT4ge1xuICBmb3IgKGNvbnN0IG5hbWUgb2Ygb3B0aW9uLm5hbWUpIHtcbiAgICBjb25zdCBpZHggPSBjb250ZXh0LmluZGV4T2YobmFtZSk7XG4gICAgaWYgKGlkeCA+IC0xKSB7XG4gICAgICByZXR1cm4gaWR4O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAtMTtcbn1cblxuY29uc3QgcHJvamVjdEdlbmVyYXRvcjogRmlnLkdlbmVyYXRvciA9IHtcbiAgc2NyaXB0KGNvbnRleHQpIHtcbiAgICBjb25zdCB0b2tlbiA9IGdldE9wdGlvbkZyb21Db250ZXh0KGNvbnRleHQsIHRva2VuT3B0KTtcbiAgICBjb25zdCBob3N0ID0gZ2V0T3B0aW9uRnJvbUNvbnRleHQoY29udGV4dCwgaG9zdE9wdCkgfHwgREVGQVVMVF9IT1NUO1xuXG4gICAgcmV0dXJuIGBjdXJsIC1zIC1YIEdFVCBcXFxuICAgICR7aG9zdH0vYXBpL3YyL3Byb2plY3RzIFxcXG4gICAgLUggJ0F1dGhvcml6YXRpb246ICR7dG9rZW59J2A7XG4gIH0sXG4gIHBvc3RQcm9jZXNzKG91dCkge1xuICAgIGNvbnN0IHByb2plY3RzOiBQcm9qZWN0W10gPSBKU09OLnBhcnNlKG91dCkuaXRlbXM7XG5cbiAgICByZXR1cm4gcHJvamVjdHMubWFwPEZpZy5TdWdnZXN0aW9uPigoaXRlbSkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogaXRlbS5rZXksXG4gICAgICAgIGluc2VydFZhbHVlOiBpdGVtLmtleSxcbiAgICAgICAgZGVzY3JpcHRpb246IGl0ZW0ubmFtZSxcbiAgICAgIH07XG4gICAgfSk7XG4gIH0sXG59O1xuXG5jb25zdCBlbnZpcm9ubWVudEdlbmVyYXRvcjogRmlnLkdlbmVyYXRvciA9IHtcbiAgc2NyaXB0KGNvbnRleHQpIHtcbiAgICBjb25zdCB0b2tlbiA9IGdldE9wdGlvbkZyb21Db250ZXh0KGNvbnRleHQsIHRva2VuT3B0KTtcbiAgICBjb25zdCBwcm9qZWN0ID0gZ2V0T3B0aW9uRnJvbUNvbnRleHQoY29udGV4dCwgcHJvamVjdE9wdCk7XG4gICAgY29uc3QgaG9zdCA9IGdldE9wdGlvbkZyb21Db250ZXh0KGNvbnRleHQsIGhvc3RPcHQpIHx8IERFRkFVTFRfSE9TVDtcbiAgICBcbiAgICByZXR1cm4gYGN1cmwgLXMgLVggR0VUIFxcXG4gICAgJHtob3N0fS9hcGkvdjIvcHJvamVjdHMvJHtwcm9qZWN0fSBcXFxuICAgIC1IICdBdXRob3JpemF0aW9uOiAke3Rva2VufSdgO1xuICB9LFxuICBwb3N0UHJvY2VzcyhvdXQpIHtcbiAgICBjb25zdCBlbnZzOiBFbnZpcm9ubWVudFtdID0gSlNPTi5wYXJzZShvdXQpLmVudmlyb25tZW50cztcblxuICAgIHJldHVybiBlbnZzLm1hcDxGaWcuU3VnZ2VzdGlvbj4oKGl0ZW0pID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6IGl0ZW0ua2V5LFxuICAgICAgICBpbnNlcnRWYWx1ZTogaXRlbS5rZXksXG4gICAgICAgIGRlc2NyaXB0aW9uOiBpdGVtLm5hbWUsXG4gICAgICB9O1xuICAgIH0pO1xuICB9LFxufTtcblxuY29uc3QgcHJvamVjdE9wdDogRmlnLk9wdGlvbiA9IHtcbiAgbmFtZTogW1wiLS1wcm9qZWN0LWtleVwiLCBcIi1wXCJdLFxuICAgICAgZGVzY3JpcHRpb246IFwiUHJvamVjdCBrZXlcIixcbiAgICAgIGFyZ3M6IHtcbiAgICAgICAgbmFtZTogXCJwcm9qZWN0LWtleVwiLFxuICAgICAgICBkZWJvdW5jZTogdHJ1ZSxcbiAgICAgICAgZ2VuZXJhdG9yczogcHJvamVjdEdlbmVyYXRvcixcbiAgICAgIH1cbn07XG5cbmNvbnN0IHRva2VuT3B0OiBGaWcuT3B0aW9uID0ge1xuICBuYW1lOiBbXCItLWFwaS10b2tlblwiLCBcIi10XCJdLFxuICBkZXNjcmlwdGlvbjogXCJBUEkgdG9rZW5cIixcbiAgYXJnczoge1xuICAgIG5hbWU6IFwiYXBpLXRva2VuXCJcbiAgfVxufTtcblxuY29uc3QgaG9zdE9wdDogRmlnLk9wdGlvbiA9IHtcbiAgbmFtZTogW1wiLS1ob3N0XCIsIFwiLUhcIl0sXG4gIGRlc2NyaXB0aW9uOiBcIkhvc3RuYW1lIG92ZXJyaWRlXCIsXG4gIGFyZ3M6IHtcbiAgICBuYW1lOiBcImhvc3RcIixcbiAgfSxcbn07XG5cbmNvbnN0IGNvbXBsZXRpb25TcGVjOiBGaWcuU3BlYyA9IHtcbiAgbmFtZTogXCJzeW5jLWxkLWZsYWdzXCIsXG4gIGRlc2NyaXB0aW9uOiBcIkxhdW5jaERhcmtseSBFbnZpcm9ubWVudCBTeW5jaHJvbml6ZXJcIixcbiAgLy8gc3ViY29tbWFuZHM6IFtcbiAgLy8gICB7XG4gIC8vICAgICBuYW1lOiBcIm15X3N1YmNvbW1hbmRcIixcbiAgLy8gICAgIGRlc2NyaXB0aW9uOiBcIkV4YW1wbGUgc3ViY29tbWFuZFwiLFxuICAvLyAgICAgc3ViY29tbWFuZHM6IFt7XG4gIC8vICAgICAgIG5hbWU6IFwibXlfbmVzdGVkX3N1YmNvbW1hbmRcIixcbiAgLy8gICAgICAgZGVzY3JpcHRpb246IFwiTmVzdGVkIHN1YmNvbW1hbmQsIGV4YW1wbGUgdXNhZ2U6ICdzeW5jLWxkLWZsYWdzIG15X3N1YmNvbW1hbmQgbXlfbmVzdGVkX3N1YmNvbW1hbmQnXCJcbiAgLy8gICAgIH1dLFxuICAvLyAgIH0sXG4gIC8vIF0sXG4gIG9wdGlvbnM6IFtcbiAgICB7XG4gICAgICBuYW1lOiBbXCItLWhlbHBcIiwgXCItaFwiXSxcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlNob3cgaGVscCBmb3Igc3luYy1sZC1mbGFnc1wiLFxuICAgIH0sXG4gICAgcHJvamVjdE9wdCxcbiAgICB7XG4gICAgICBuYW1lOiBbXCItLXNvdXJjZS1lbnZcIiwgXCItc1wiXSxcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlNvdXJjZSBlbnZpcm9ubWVudFwiLFxuICAgICAgZGVwZW5kc09uOiBbXCItcFwiXSxcbiAgICAgIGFyZ3M6IHtcbiAgICAgICAgbmFtZTogXCJzb3VyY2UtZW52XCIsXG4gICAgICAgIGRlYm91bmNlOiB0cnVlLFxuICAgICAgICBnZW5lcmF0b3JzOiBlbnZpcm9ubWVudEdlbmVyYXRvcixcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBbXCItLWRlc3RpbmF0aW9uLWVudlwiLCBcIi1kXCJdLFxuICAgICAgZGVzY3JpcHRpb246IFwiRGVzdGluYXRpb24gZW52aXJvbm1lbnRcIixcbiAgICAgIGRlcGVuZHNPbjogW1wiLXBcIl0sXG4gICAgICBhcmdzOiB7XG4gICAgICAgIG5hbWU6IFwic291cmNlLWVudlwiLFxuICAgICAgICBkZWJvdW5jZTogdHJ1ZSxcbiAgICAgICAgZ2VuZXJhdG9yczogZW52aXJvbm1lbnRHZW5lcmF0b3IsXG4gICAgICB9LFxuICAgIH0sXG4gICAgdG9rZW5PcHQsXG4gICAge1xuICAgICAgbmFtZTogW1wiLS1vbWl0LXNlZ21lbnRzXCIsIFwiLW9cIl0sXG4gICAgICBkZXNjcmlwdGlvbjogXCJPbWl0IHNlZ21lbnRzIHdoZW4gc3luY2luZ1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogW1wiLS1kcnktcnVuXCJdLFxuICAgICAgZGVzY3JpcHRpb246IFwiUHJldmlldyBzeW5jaW5nIGNoYW5nZXNcIixcbiAgICB9LFxuICAgIGhvc3RPcHQsXG4gICAge1xuICAgICAgbmFtZTogW1wiLS1kZWJ1Z1wiLCBcIi1EXCJdLFxuICAgICAgZGVzY3JpcHRpb246IFwiRW5hYmxlcyBIVFRQIGRlYnVnZ2luZ1wiLFxuICAgIH0sXG4gIF0sXG4gIC8vIE9ubHkgdW5jb21tZW50IGlmIHN5bmMtbGQtZmxhZ3MgdGFrZXMgYW4gYXJndW1lbnRcbiAgLy8gYXJnczoge31cbn07XG5leHBvcnQgZGVmYXVsdCBjb21wbGV0aW9uU3BlYzsiXSwKICAibWFwcGluZ3MiOiAiQUFVQSxHQUFNLEdBQWUsK0JBRWYsRUFBdUIsQ0FBQyxFQUFTLElBQXVCLENBQzVELEdBQU0sR0FBUSxFQUEwQixFQUFTLEdBR2pELE1BRmMsR0FBUSxHQUFLLEVBQVEsRUFBTSxHQUFLLElBSzFDLEVBQTRCLENBQUMsRUFBUyxJQUF1QixDQUNqRSxPQUFXLEtBQVEsR0FBTyxLQUFNLENBQzlCLEdBQU0sR0FBTSxFQUFRLFFBQVEsR0FDNUIsR0FBSSxFQUFNLEdBQ1IsTUFBTyxHQUlYLE1BQU8sSUFHSCxFQUFrQyxDQUN0QyxPQUFPLEVBQVMsQ0FDZCxHQUFNLEdBQVEsRUFBcUIsRUFBUyxHQUc1QyxNQUFPLHNCQUZNLEVBQXFCLEVBQVMsSUFBWSw0Q0FJbEMsTUFFdkIsWUFBWSxFQUFLLENBR2YsTUFBTyxBQUZxQixNQUFLLE1BQU0sR0FBSyxNQUU1QixJQUFvQixBQUFDLEdBQzVCLEVBQ0wsS0FBTSxFQUFLLElBQ1gsWUFBYSxFQUFLLElBQ2xCLFlBQWEsRUFBSyxVQU1wQixFQUFzQyxDQUMxQyxPQUFPLEVBQVMsQ0FDZCxHQUFNLEdBQVEsRUFBcUIsRUFBUyxHQUN0QyxFQUFVLEVBQXFCLEVBQVMsR0FHOUMsTUFBTyxzQkFGTSxFQUFxQixFQUFTLElBQVkscUJBRzdCLDRCQUNMLE1BRXZCLFlBQVksRUFBSyxDQUdmLE1BQU8sQUFGcUIsTUFBSyxNQUFNLEdBQUssYUFFaEMsSUFBb0IsQUFBQyxHQUN4QixFQUNMLEtBQU0sRUFBSyxJQUNYLFlBQWEsRUFBSyxJQUNsQixZQUFhLEVBQUssVUFNcEIsRUFBeUIsQ0FDN0IsS0FBTSxDQUFDLGdCQUFpQixNQUNwQixZQUFhLGNBQ2IsS0FBTSxDQUNKLEtBQU0sY0FDTixTQUFVLEdBQ1YsV0FBWSxJQUlkLEVBQXVCLENBQzNCLEtBQU0sQ0FBQyxjQUFlLE1BQ3RCLFlBQWEsWUFDYixLQUFNLENBQ0osS0FBTSxjQUlKLEVBQXNCLENBQzFCLEtBQU0sQ0FBQyxTQUFVLE1BQ2pCLFlBQWEsb0JBQ2IsS0FBTSxDQUNKLEtBQU0sU0FJSixFQUEyQixDQUMvQixLQUFNLGdCQUNOLFlBQWEsd0NBV2IsUUFBUyxDQUNQLENBQ0UsS0FBTSxDQUFDLFNBQVUsTUFDakIsWUFBYSwrQkFFZixFQUNBLENBQ0UsS0FBTSxDQUFDLGVBQWdCLE1BQ3ZCLFlBQWEscUJBQ2IsVUFBVyxDQUFDLE1BQ1osS0FBTSxDQUNKLEtBQU0sYUFDTixTQUFVLEdBQ1YsV0FBWSxJQUdoQixDQUNFLEtBQU0sQ0FBQyxvQkFBcUIsTUFDNUIsWUFBYSwwQkFDYixVQUFXLENBQUMsTUFDWixLQUFNLENBQ0osS0FBTSxhQUNOLFNBQVUsR0FDVixXQUFZLElBR2hCLEVBQ0EsQ0FDRSxLQUFNLENBQUMsa0JBQW1CLE1BQzFCLFlBQWEsOEJBRWYsQ0FDRSxLQUFNLENBQUMsYUFDUCxZQUFhLDJCQUVmLEVBQ0EsQ0FDRSxLQUFNLENBQUMsVUFBVyxNQUNsQixZQUFhLDRCQU1aLEVBQVEiLAogICJuYW1lcyI6IFtdCn0K
