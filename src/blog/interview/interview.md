---
title: Linux Rig Interview
description: Interview about my setup for Linux Rig website
date: 2018-05-18
tags:
  - linux
  - interview
  - featured
draft: true

---
## Who are you, and what do you do?
My name is José. I’m software engineer living in Brooklyn, NY. I consult on web apps and websites for a variety of different industries. I've been using Linux for about 17 years.


## Why do you use Linux?
In the nineties, I wanted to learn C/C++. Visual Studio and a decent compiler cost like $600. A programmer friend of mine told me I could just use vim and gcc and handed me a stack of floppies with Linux on it. I immediately decimated my parent’s Windows 95 machine, and after about 10 tries, I had my first working Linux box. Sort of. I mean, sound, ethernet, or X didn’t work, but I was running Linux, right? I spent the next couple of months figuring out how to get that stuff to work. I never learned C very well, but I’ve been hooked on Linux ever since.


These days, Linux just works for me. On my desktop and on the servers I work with.


As someone who is on the computer anywhere from 8-12 hours any given day, I want complete control over my machine. I use Linux because it’s the only environment that allows me to configure it to look and behave precisely as I want.  Windows or MacOS don't even come close.


A small but important example: I have a certain directory of images that become my desktop wallpaper every five minutes, except on the 8th workspace where it's always the same minimal wallpaper and also prints a ton of system statistics (but only on that workspace).  I type Mod+8 (“Mod” is windows or command key) to get to that workspace. My hands never leave home row. That's basically impossible to achieve on any other OS. I achieve this with roughly 10 lines of script.


At work, I'm forced to use a Mac a lot. I'm not a Mac hater but it’s hard to describe what I love about Linux without mentioning what I find frustrating about other systems. There's so much about the default environment that just gets in my way. It usually takes me most of an entire workday (if I have admin access) to shut off all the default settings one is supposed to love MacOS for.


A few:


*  I don't want a dock. Spotlight works just fine.
*  Ignore that. I don't want spotlight. I prefer an app called Alfred.
*  I don't want icons on my desktop. I want my desktop clean.
*  I don't want to tap to click. Or any other trackpad gestures to open up mission control or space command or anything else! I want that off by default!


These are all choices that Apple makes for you and they drive me nuts. And you can’t actually remove the damn dock, I basically have to hack it so it takes ten minutes to show on hover.


On Linux, I just start with a window manager that has the default configuration that I want and I have dozens if not hundreds to choose from. If I don't like the way they are set up, I just fix it myself, because I have clear, documented access to the actual code. Better yet, I can just use one of the thousands of scripts written by the community. Changing some of these things on other OSes is often nearly impossible.


## What distribution do you run on your main desktop/laptop?
My first distro was Caldera OpenLinux in 2001, much to my parent’s chagrin. I distro-hopped for several years (Slackware, Mandrake, Debian, Ubuntu for about 5 years). I settled on ArchLinux about 6 years ago. I love Arch because it's simple and clean and gets out of my way so that I can have the exact experience that I want. The community is tremendous and the distro is just hard enough to use that, imho, it removes some of the noise from the community forums.


## What desktop environment do you use and why do you use it?
I’ve used Gnome, Enlightenment, Xfce and half dozen others over the years. Then I discovered tiling window managers about the same time I switched to Arch. Used AwesomeWM for about a year before I found i3. I've been using that ever since.


## What one piece of Linux software do you depend upon? Why is it so important?
The software I use the most is available on other OSes. (Vim/Emacs--I use them both, don't ask. Chrome/Firefox, RoxTerm, Git, Tmux, VirtualBox).


As I mentioned, I'm forced to use a Mac at work more often than not. i3 is the one piece of software I miss the most.


You’ve probably guessed by now that I really don't like using the mouse. I use i3 with dmenu/rofi as a launcher. Emacs with vim bindings for my editor and even vimium when I'm browsing the web.


In fact, I've accidentally disabled the trackpad on some laptops and didn't even realize it for an hour. I've tried very hard to replicate that experience on either Mac or Windows over the last 17 years and it's nearly impossible.


## What kind of hardware do you run this setup on?
I use a Dell XPS 13 from a couple of years back that I bought refurbished. It has an Intel Core i5-6200U ‘Skylake’ chip with 2 cores I think (I don't really do a whole lot of heavy lifting). 8G of ram and a 256GB SSD. It's not crazy powerful but my setup is so minimal and light, it boots up in like 8 seconds and absolutely flies. I don't do any gaming or heavy graphics editing or anything. I think it weighs less than the original iPad. And I carry a handful of dongles so I can connect it to the variety of monitors that are available to me in all the different offices where I find myself consulting. It's perfect for me.


The one piece of hardware I love the most is my Das Keyboard 4 Ultimate mechanical keyboard with Cherry MX Brown switches. The fact that the keys are all blank is great. Learning Vim years ago is the primary reason I learned to touch type, but this keyboard has really forced me to improve.  (I’ve attached a screenshot of the workstation at my last gig, that’s Xscreensaver running on some crappy monitor they gave me).


## Will you share a screenshot of your desktop?
At any given time, I have 3-6 workspaces running different apps:


* Workspace 1. Shells (1-5 terminals) I do all my file management from a terminal. Occasionally, I need to open a nautilus to quickly browse images or wireframes. I type the letter "O" and Nautilus fires up in the current directory.
* Workspace 2. Web (chrome/firefox)
* Workspace 3. Emacs with every vim binding I can install.
* Workspace 8. Chat (Slack, Skype, irssi,  etc.)
* Workspace 9. Media. 4
* Workspace 0. VM's (Virtualbox running whatever I need here)


Notice they each correspond to numbers on the keyboard. Three that my left
hand can easily grab and three that my right hand can grab. This is all done with 8 lines in my config file. Each one is a keyboard stroke away, no annoying click-click-click of Alt-tab.
