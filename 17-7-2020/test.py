df=pd.read_html('https://www.contextures.com/xlSampleData01.html')
df=df[0]
len(df.loc[df[3]=='Pencil'])


df=pd.read_html('https://www.contextures.com/xlSampleData01.html',skiprows=1)
df=df[0]
import numpy as np
np.std(df.loc[:,5])

df=pd.read_html('https://www.espncricinfo.com/india/content/player/253802.html')
df[0].head
df[0].iloc[:,-4].sum()

