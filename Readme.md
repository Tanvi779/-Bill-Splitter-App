
# 💸 Bill Splitter 3000 

Ever been at dinner with friends and the bill shows up looking like a horror movie ending?
This **JavaScript-powered Bill Splitter** swoops in to save friendships, sanity, and your mental calculator battery.

---

## 🚀 Features

* **Bill Splitting** — Divide the total amount among your friends without starting a civil war.
* **Tip Percentages** — Because waiters deserve love too (even if you can’t do percentages in your head).
* **Input Sanitization** — Paste in any messy input (`$`, spaces, emojis, whatever), and it will still work.
* **Currency Formatting** — Outputs in a clean USD format like `$42.69` (classy, right?).
* **Error Handling** — Politely tells you when you’re doing something silly, like splitting among zero people.

---

## 🛠 How It Works

1. **Enter the Total Amount** — This is the bill before splitting.
2. **Enter the Number of People** — How many mouths the pizza fed.
3. **Enter Tip %** *(optional)* — Generous or not, you choose.
4. **Click the Button** — Magic happens, and everyone knows what they owe.

---

## 📦 Example

```plaintext
Total Amount: $120  
People: 4  
Tip: 10%  

Result: Each person pays $33.00
```

---

## 🧠 Under the Hood

* `sanitizeInput()` → Strips away non-numerical junk so math stays happy.
* `perPerAmt()` → Does the bill + tip calculation per person.
* `Intl.NumberFormat` → Makes sure your result looks like actual money.
* Event listener on the button → Ties it all together when clicked.

---


## 📸 Screenshot

![Expense Splitter Screenshot](./Expense%20Splitter.png)
