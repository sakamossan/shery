import logging
from django.conf import settings


def dump_ltsv(dict_):
    return "\t".join(
        "{}:{}".format(k, v) for k, v
        in sorted(dict_.items())
    )


def info(msg):
    logger = logging.getLogger('file_and_console')
    logger.info(msg)


def info_dump(logtype=None, **dict_):
    logger = logging.getLogger('file_and_console')
    msg = dump_ltsv(dict_)
    if logtype is not None:
        msg = "logtype:{}\t{}".format(logtype, msg)
    logger.info(msg)


def basedir_open(path, *args, **kw):
    return open('{}/{}'.format(settings.BASE_DIR, path), *args, **kw)

