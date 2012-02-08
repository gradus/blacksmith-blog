###Using Node Cloudq Server at Jack Russell Software

Since May of 2011, Jack Russell Software has been using node-cloudq (https://github.com/twilson63/node-cloudq) server for publishing to and consuming messages from a queue to offload back office tasks and various other jobs.  Cloudq has been through a number of manifestations, but has grown to be an invaluable tool for us.  Issues have been near null and the simplicity of use wonderful.  The wiki on github ( https://github.com/twilson63/node-cloudq/wiki/ ) has been recently updated and is pretty good, but really is almost uneccessary due to how simple the concept is.  

The idea is that messages are stored as json data in a couchdb server.
This could be switched to use mongo (which we did use for some time) or
another datastore like redis.  The queue is just a Broadway ( https://github.com/flatiron/broadway ) app to use the couchdb plugin. This can be done with a simple post in any language (curl examples are in the readme for cloudq). 

Once a message is posted with a klass name and array of args as json (json format ex. in readme), it gets set to 'queued'.  Dequeueing the message is just an http 'GET', which can be done in any language as well.  After the message has been consumed, the message is marked as 'deleted' and whatever process you are using to check the queue can do whatever you would like with the message args.

a quick example of dequeing a message in ruby using the ruby cloudq
client:

https://github.com/twilson63/cloudq_client

    require 'cloudq'
    queues = ['do_something']

    Cloudq::Worker.new(*queues).run do
      sleep 5
    end

    class DoSomething
      def self.perform(*args)
        SomeClass.perform_a_method_with_args
      end
    end


There is also a node client ( https://github.com/twilson63/node-cloudq-client )
and a few others (even one in C#), but it is very simple to roll your own in any language desired.  


CloudQ has been a very helpful tool to have in our back pocket and 'just
works' almost with out fail.

If you have a chance, it is definitely worth experimenting with.  There
are many tools that can accomplish the same thing, but this is the
simplest, most versatile one I know of.  Thanks yet again, Tom, for making our
lives a little easier with such a simple piece of software.

![CloudQ](node-cloudq/cloudq.png "CloudQ")



