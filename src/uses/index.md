---
layout: base.njk
eleventyNavigation:
  key: Uses
  order: 3

---

## Main Hardware

* XPS 13 9350 | Intel Core i5-6200U ‘Skylake’ 2 cores I think (I don't really do a whole lot of heavy lifting).
	8G of ram and a 256GB SSD.
* XPS 15 with like 32G of RAM and a TB of storage
* Samsung Tab Lite 6
* Kindle Oasis
* Logitech MX Ergo | you can probably guess I don't love leaving the keyboard. I don't. I like the trackpad and build quality and I'm prone to repetitive stress, so this is nice that I don't have to move the mouse much, just the little ball.

Both of the Dells run some flavor of Manjaro. Xorg on the 13 and Wayland on the 15. i3 and Sway WM's respectively.

-------------------------------------------------------
## Terminal Apps / CLI

I spent most of my time in the terminal so those tools obviously get their own section here.

* vim (neovim)
* i3 | Tiling window manager written in C. Super fast, configurable, minimal.
* mutt | for email. I have a couple of gmails I still keep around, but they mostly just collect spam
* irssi | for IRC. Mostly to check on VIM/Linux stuff and the IndieWeb community
* kitty | highly configurable terminal emulator. I like it because it's cross-platform and easy for me to just clone the one kitty.conf file accross machines. I've tried them all. ALacritty, XUrvt, iTerm2, Fish, etc.

-------------------------------------------------------
## Dotfiles

Not exhaustive. Just a few dotfiles and configs for the terminal apps that do most of the heavy lifting on my machine.

[vim-accent](https://github.com/airblade/vim-accent)
<br />
My meager contribution to this little vim plugin I found so useful. It basically just a map that triggers a list of available accents. I added ones that work in Spanish.

[dotfiles](https://github.com/jarenado/dotfiles)
<br />
These are in varying states of mediocre maintenance. Nvim, kitty, i3 and jozeshell are the most active.

<!--TODO:// style this-->
[**joZeSHell**<sup>TM</sup>](https://github.com/jarenado/dotfiles/tree/master/.jozeshell)
<br />
Homegrown unix shell framework. I ripped off oh-my-zsh, stripped it down, sourced a couple of scripts and learned a little about bash/zsh scripting. It really needs some better documentation and general cleanup.

[(n)vim config](https://github.com/jarenado/dotfiles/tree/master/nvim/.config)
<br />
I use neovim, but I'm pretty sure this will work in any modern vim. The main difference between the 'old' directory is that the new one is almost completely rewritten in Lua. The workflow is almost identical (I use the vimscript config on one laptop and the lua one on another) but after years of avoiding Lua for my vim, I'm fully converted now. Great language. Makes plugin development a lot more fun. The repo itself is actually in great shape and complete as far as my workflow. But, as usual, the documentation leaves a lot to be desired and I'm not in love with the structure.


-------------------------------------------------------
## GUI

Lest you think I don't leave the terminal, I do make responsive web applications for a big chunk of my work. I do use Opera, Chrome, Vivaldi and Firefox for general web browsing

I honestly can't think of another GUI I use on a regular basis. Maybe whatever PDF reader is on the system, but I even use Ranger for a terminal-based file manager.

-------------------------------------------------------
