# Import Tkinter
from Tkinter import *

# define master
master = Tk()

# Horizontal (x) Scroll bar
xscrollbar = Scrollbar(master, orient=HORIZONTAL)
xscrollbar.pack(side=BOTTOM, fill=X)

# Vertical (y) Scroll Bar
yscrollbar = Scrollbar(master)
yscrollbar.pack(side=RIGHT, fill=Y)

# Text Widget
text = Text(master, wrap=NONE,
            xscrollcommand=xscrollbar.set,
            yscrollcommand=yscrollbar.set)
text.pack()
for i in range(100):
    text.insert(END, f"Priyanshu Choudhary")

# Configure the scrollbars
xscrollbar.config(command=text.xview)
yscrollbar.config(command=text.yview)

# Run tkinter main loop
mainloop()