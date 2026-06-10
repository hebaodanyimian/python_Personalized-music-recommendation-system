# coding:utf-8
import hashlib
import base64
from Crypto.Cipher import DES,AES
from Crypto.Util.Padding import pad,unpad

class Common(object):

    def md5(self, pwd):
        md5 = hashlib.md5()
        md5.update(pwd.encode())
        return md5.hexdigest()
    #脱敏
    def desensitization(self,content,type):
        try:
            if type == '名':
                content=  content[0] + '*' * (len(content) - 1)
            elif type =='手':
                content = content[:3] + '*' * (len(content) - 7)+content[-4:]
            elif type =='身':
                content = content[:6] + '*' * 10+content[16:]
            elif type =='卡':
                content = content[:6] + '*' * (len(content) - 10)+content[-4:]
            elif type =='邮':
                prefix = content.split("@")[0]
                suffix = content.split("@")[1]
                content = prefix[0] + '*' * (len(prefix) - 1)+"@"+suffix
            else:
                pass
        except:
            pass
        return content



